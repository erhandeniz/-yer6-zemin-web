type ActiveRequest = {
  stopRequested: boolean;
};

const activeRequests = new Map<string, ActiveRequest>();

export function registerAIRequest(requestId: string, incomingSignal: AbortSignal) {
  const previousRequest = activeRequests.get(requestId);
  if (previousRequest) previousRequest.stopRequested = true;

  const controller = new AbortController();
  const relayAbort = () => controller.abort();
  if (incomingSignal.aborted) controller.abort();
  else incomingSignal.addEventListener("abort", relayAbort, { once: true });

  const activeRequest: ActiveRequest = { stopRequested: false };
  activeRequests.set(requestId, activeRequest);

  return {
    signal: controller.signal,
    abort() {
      controller.abort();
    },
    shouldStop() {
      return activeRequest.stopRequested;
    },
    cleanup() {
      if (activeRequests.get(requestId) === activeRequest) activeRequests.delete(requestId);
      incomingSignal.removeEventListener("abort", relayAbort);
    }
  };
}

export function stopAIRequest(requestId: string) {
  const activeRequest = activeRequests.get(requestId);
  if (!activeRequest) return false;
  activeRequest.stopRequested = true;
  return true;
}
