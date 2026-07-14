import type { AIChatLocale } from "@/lib/ai/contracts";

const messages = {
  invalidRequest: {
    tr: "Mesaj biçimi geçersiz. Lütfen daha kısa bir mesajla yeniden deneyin.",
    en: "The message format is invalid. Please retry with a shorter message.",
    ar: "تنسيق الرسالة غير صالح. يرجى المحاولة مرة أخرى برسالة أقصر."
  },
  unauthorized: {
    tr: "Bu işlem için oturum açmanız gerekiyor.",
    en: "You need to sign in for this action.",
    ar: "يجب تسجيل الدخول لتنفيذ هذا الإجراء."
  },
  rateLimited: {
    tr: "Dakikalık mesaj sınırına ulaşıldı. Lütfen kısa bir süre bekleyip yeniden deneyin.",
    en: "The per-minute message limit has been reached. Please wait briefly and try again.",
    ar: "تم الوصول إلى حد الرسائل في الدقيقة. يرجى الانتظار قليلاً ثم المحاولة مرة أخرى."
  },
  notConfigured: {
    tr: "Yapay zekâ hizmeti henüz yapılandırılmadı.",
    en: "The AI service has not been configured yet.",
    ar: "لم تتم تهيئة خدمة الذكاء الاصطناعي بعد."
  },
  unavailable: {
    tr: "Yapay zekâ hizmetine şu anda ulaşılamıyor. Lütfen biraz sonra yeniden deneyin.",
    en: "The AI service is currently unavailable. Please try again shortly.",
    ar: "خدمة الذكاء الاصطناعي غير متاحة حالياً. يرجى المحاولة مرة أخرى بعد قليل."
  }
} as const;

export type AIMessageKey = keyof typeof messages;

export function aiMessage(key: AIMessageKey, locale: AIChatLocale) {
  return messages[key][locale];
}
