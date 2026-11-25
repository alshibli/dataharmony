/*
 * All site copy lives here, in Arabic and English.
 *
 * The Arabic copy comes from the original Arabic site (June 2025); the English is a
 * translation of it. Items marked "DRAFT" were written for the rebuild and should be reviewed.
 * Empty lists/strings (testimonials, blog posts, contact details) are still to be written:
 * fill them in and the pages pick them up automatically.
 */
import type { Text } from "./i18n";
import type { IconName } from "./components/Icon";

export const company = {
  name: { ar: "تناغم البيانات", en: "Data Harmony" },
  legalName: { ar: "شركة تناغم البيانات لتقنية المعلومات", en: "Data Harmony Information Technology Company" },
  // DRAFT: summary of the five solution areas on the original page.
  tagline: {
    ar: "حلول الذكاء الاصطناعي والبيانات للزراعة والبناء والمؤسسات والبحث العلمي",
    en: "AI and data solutions for agriculture, construction, enterprises and research",
  },
} satisfies Record<string, Text>;

export const nav: { to: string; label: Text }[] = [
  { to: "/", label: { ar: "الرئيسية", en: "Home" } },
  { to: "/about", label: { ar: "من نحن", en: "About" } },
  { to: "/services", label: { ar: "خدماتنا", en: "Services" } },
  { to: "/testimonials", label: { ar: "آراء العملاء", en: "Testimonials" } },
  { to: "/blog", label: { ar: "المدونة", en: "Blog" } },
  { to: "/contact", label: { ar: "تواصل معنا", en: "Contact" } },
];

export type ServiceGroup = { title?: Text; points: Text[]; valueLabel: Text; value: Text };
export type Service = { id: string; icon: IconName; title: Text; summary: Text; groups: ServiceGroup[] };

const VALUE: Text = { ar: "القيمة", en: "Value" };
const BENEFIT: Text = { ar: "الفائدة", en: "Benefit" };

export const services: Service[] = [
  {
    id: "smart-agriculture",
    icon: "sprout",
    title: { ar: "الزراعة الذكية بالذكاء الاصطناعي", en: "AI-Powered Smart Agriculture" },
    // DRAFT summary
    summary: {
      ar: "صحة المحاصيل، والكشف المبكر عن الآفات، والري الذكي، والتنبؤ بالإنتاج.",
      en: "Crop health, early pest detection, smart irrigation and yield forecasting.",
    },
    groups: [
      {
        points: [
          { ar: "تحليل صحة المحاصيل باستخدام NDVI و NIR", en: "Crop health analysis using NDVI and NIR" },
          { ar: "كشف مبكر للآفات والأمراض بنماذج تعلم عميق", en: "Early detection of pests and diseases with deep-learning models" },
          { ar: "إدارة الري الذكي باستخدام بيانات الطقس والاستشعار عن بعد", en: "Smart irrigation management using weather data and remote sensing" },
          { ar: "تنبؤ بالإنتاج الزراعي وتحليل دورات المحاصيل", en: "Crop yield forecasting and crop-cycle analysis" },
        ],
        valueLabel: VALUE,
        value: { ar: "تقليل الهدر، تحسين الإنتاج، الاستدامة", en: "Less waste, higher yields, sustainability" },
      },
    ],
  },
  {
    id: "construction-monitoring",
    icon: "building",
    title: { ar: "مراقبة البناء باستخدام الاستشعار عن بعد", en: "Construction Monitoring with Remote Sensing" },
    summary: {
      ar: "متابعة مراحل البناء من الصور الجوية والفضائية مع نماذج ثلاثية الأبعاد ولوحات تحكم.",
      en: "Track construction progress from aerial and satellite imagery, with 3D models and dashboards.",
    },
    groups: [
      {
        points: [
          { ar: "تحليل الصور الجوية والفضائية لمتابعة مراحل البناء", en: "Aerial and satellite image analysis to track construction stages" },
          { ar: "إنشاء نماذج ثلاثية الأبعاد للموقع", en: "3D models of the site" },
          { ar: "اكتشاف تلقائي للمخالفات أو التأخير باستخدام الذكاء الاصطناعي", en: "Automatic AI detection of violations or delays" },
          { ar: "دمج الخرائط المكانية مع لوحات تحكم بصرية", en: "Geospatial maps combined with visual dashboards" },
        ],
        valueLabel: VALUE,
        value: { ar: "تقارير دقيقة، قرارات مبنية على بيانات", en: "Accurate reports, data-driven decisions" },
      },
    ],
  },
  {
    id: "specialized-llms",
    icon: "chat",
    title: { ar: "نماذج لغوية تخصصية (LLMs)", en: "Domain-Specific Language Models (LLMs)" },
    summary: {
      ar: "نماذج لغوية للمجالات الطبية والقانونية والصناعية بدعم كامل للغة العربية.",
      en: "Language models for medical, legal and industrial work, with full Arabic support.",
    },
    groups: [
      {
        points: [
          { ar: "طبية: فهم التقارير والإجابة على الأسئلة", en: "Medical: understanding reports and answering questions" },
          { ar: "قانونية: تحليل الأنظمة والمساعدة في العقود", en: "Legal: analysing regulations and assisting with contracts" },
          { ar: "صناعية: دعم الأوامر والتعليمات الصوتية", en: "Industrial: support for commands and voice instructions" },
          { ar: "دعم العربية: تعزيز التواصل التقني العربي", en: "Arabic support: strengthening technical communication in Arabic" },
        ],
        valueLabel: VALUE,
        value: { ar: "أتمتة المعرفة وتقليل التدخل البشري", en: "Automated knowledge work with less manual effort" },
      },
    ],
  },
  {
    id: "digital-transformation",
    icon: "layers",
    title: { ar: "التحول الرقمي", en: "Digital Transformation" },
    summary: {
      ar: "أنظمة وتطبيقات ولوحات بيانات للمؤسسات، ومنصات رقمية للبحث والابتكار.",
      en: "Systems, apps and dashboards for enterprises, and digital platforms for research and innovation.",
    },
    groups: [
      {
        title: { ar: "للمؤسسات", en: "For enterprises" },
        points: [
          { ar: "نظم ERP وCRM لإدارة العمليات والعملاء", en: "ERP and CRM systems to manage operations and customers" },
          { ar: "تطبيقات مخصصة لزيادة الكفاءة", en: "Custom applications that raise efficiency" },
          { ar: "دمج الأنظمة القديمة مع الذكاء الاصطناعي", en: "Integrating legacy systems with AI" },
          { ar: "لوحات BI لتحليل البيانات واتخاذ القرار", en: "BI dashboards for data analysis and decision-making" },
          { ar: "إدارة البيانات الضخمة وتطبيق الحوسبة السحابية", en: "Big-data management and cloud computing" },
        ],
        valueLabel: BENEFIT,
        value: { ar: "خفض التكاليف وتحسين تجربة العملاء", en: "Lower costs and a better customer experience" },
      },
      {
        title: { ar: "للبحث والابتكار", en: "For research and innovation" },
        points: [
          { ar: "منصات رقمية لإدارة الأبحاث", en: "Digital platforms for managing research" },
          { ar: "تحليل إنتاج علمي واقتراح مسارات بحث جديدة", en: "Analysis of scientific output and suggestions for new research directions" },
          { ar: "أدوات تعاون سحابي", en: "Cloud collaboration tools" },
          { ar: "أتمتة تسجيل الابتكارات وبراءات الاختراع", en: "Automated registration of innovations and patents" },
          { ar: "ربط الباحثين بالتمويل والشراكات عبر الذكاء الاصطناعي", en: "AI-driven matching of researchers with funding and partnerships" },
        ],
        valueLabel: BENEFIT,
        value: { ar: "تسريع الابتكار وتعزيز الأثر العلمي", en: "Faster innovation and greater scientific impact" },
      },
    ],
  },
];

export type Product = { id: string; name: Text; description: Text; points: Text[]; link?: { href: string; label: Text } };

const GITHUB: Text = { ar: "رابط المشروع على GitHub", en: "Project on GitHub" };

export const productsSection = {
  title: { ar: "المنتجات الذكية المدعومة بالذكاء الاصطناعي", en: "AI-Powered Smart Products" },
} satisfies Record<string, Text>;

export const products: Product[] = [
  {
    id: "vision-biollm",
    name: { ar: "Vision-BioLLM-KSU", en: "Vision-BioLLM-KSU" },
    description: {
      ar: "نموذج تفاعلي لتحليل الصور الطبية وتوليد تقارير تشخيصية.",
      en: "An interactive model that analyses medical images and generates diagnostic reports.",
    },
    points: [{ ar: "محول رؤى + نموذج لغوي Llama3-OpenBioLLM", en: "Vision transformer + the Llama3-OpenBioLLM language model" }],
    link: { href: "https://github.com/BigData-KSU/Vision-BioLLM-KSU", label: GITHUB },
  },
  {
    id: "rs-llava",
    name: { ar: "RS-LLaVA", en: "RS-LLaVA" },
    description: {
      ar: "تحليل صور الاستشعار عن بعد وتوليد أوصاف وإجابات ذكية.",
      en: "Analyses remote-sensing images and generates descriptions and intelligent answers.",
    },
    points: [{ ar: "مدرب على مجموعة RS-instructions", en: "Trained on the RS-instructions dataset" }],
    link: { href: "https://github.com/BigData-KSU/RS-LLaVA", label: GITHUB },
  },
  {
    id: "glaucoma",
    name: { ar: "نموذج الجلوكوما", en: "Glaucoma Detection Model" },
    description: {
      ar: "اكتشاف مرض الجلوكوما من صور قاع العين باستخدام CNN.",
      en: "Detects glaucoma from fundus (retina) images using a CNN.",
    },
    points: [{ ar: "متاح على منصة Hugging Face", en: "Available on Hugging Face" }],
    link: {
      href: "https://huggingface.co/spaces/BigData-KSU/Glaucoma-Detection",
      label: { ar: "رابط المشروع", en: "Try it on Hugging Face" },
    },
  },
  {
    id: "smart-palm",
    name: { ar: "نخلتي الذكية", en: "My Smart Palm" },
    description: {
      ar: "نظام متكامل لإدارة مزارع النخيل في السعودية.",
      en: "An integrated system for managing palm farms in Saudi Arabia.",
    },
    points: [
      { ar: "تحديد الأشجار، تحليل الغطاء النباتي، تصنيف التمور", en: "Tree identification, vegetation-cover analysis, date classification" },
      { ar: "تقنيات: Grounding DINO, Sentinel-2, Transformers", en: "Technology: Grounding DINO, Sentinel-2, Transformers" },
      { ar: "توصيات فورية عبر تطبيق ذكي", en: "Instant recommendations through a smart app" },
      { ar: "المستفيدون: المزارعون، الوزارات، الباحثون، الأسواق", en: "For farmers, ministries, researchers and markets" },
      { ar: "نموذج العمل: اشتراكات وبيع البيانات", en: "Business model: subscriptions and data sales" },
    ],
  },
];

// DRAFT: written for the rebuild from the services and products above.
export const about = {
  intro: {
    ar: "شركة تناغم البيانات لتقنية المعلومات تبني حلولاً تعتمد على الذكاء الاصطناعي والبيانات: من تحليل صور الأقمار الصناعية والصور الجوية في الزراعة والبناء، إلى نماذج لغوية تخصصية تدعم اللغة العربية، وأنظمة التحول الرقمي للمؤسسات ومراكز البحث.",
    en: "Data Harmony Information Technology Company builds solutions driven by AI and data: from satellite and aerial image analysis for agriculture and construction, to domain-specific language models with Arabic support, to digital-transformation systems for enterprises and research centres.",
  },
  outcomesTitle: { ar: "ما تقدمه حلولنا", en: "What our solutions deliver" },
} satisfies Record<string, Text>;

export type Testimonial = { quote: Text; name: string; role: Text };
// No testimonials survived. Add real client quotes here; the page shows a "coming soon" note while this is empty.
export const testimonials: Testimonial[] = [];

export type BlogPost = { slug: string; date: string; title: Text; excerpt: Text; href?: string };
// No blog posts survived. Add posts here (newest first); the page shows a "coming soon" note while this is empty.
export const blogPosts: BlogPost[] = [];

// No contact details survived. Fill these in; empty values are hidden on the site.
export const contact = {
  email: "",
  phone: "",
  address: { ar: "", en: "" } as Text,
};

// Interface labels. Lines marked DRAFT were written for the rebuild.
export const ui = {
  skipToContent: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
  openMenu: { ar: "فتح القائمة", en: "Open menu" },
  closeMenu: { ar: "إغلاق القائمة", en: "Close menu" },
  switchLang: { ar: "English", en: "العربية" },
  switchLangLabel: { ar: "Switch to English", en: "التبديل إلى العربية" },
  homeLink: { ar: "تناغم البيانات، الصفحة الرئيسية", en: "Data Harmony home" },
  exploreServices: { ar: "استكشف خدماتنا", en: "Explore our services" },
  contactUs: { ar: "تواصل معنا", en: "Contact us" },
  // Title of the original Arabic page.
  solutionsTitle: { ar: "الحلول المقدمة من تناغم البيانات", en: "Solutions from Data Harmony" },
  solutionsIntro: {
    ar: "أربعة مجالات نوظّف فيها الذكاء الاصطناعي والبيانات لحل مشكلات حقيقية، إلى جانب منتجات ذكية جاهزة.",
    en: "Four areas where we apply AI and data to real problems, plus ready-made smart products.",
  }, // DRAFT
  details: { ar: "التفاصيل", en: "Details" },
  productsIntro: {
    ar: "منتجات ونماذج في الصحة والاستشعار عن بعد والزراعة.",
    en: "Products and models for health, remote sensing and agriculture.",
  }, // DRAFT
  statAreas: { ar: "مجالات حلول", en: "solution areas" },
  statProducts: { ar: "منتجات ذكية", en: "smart products" },
  statLanguages: { ar: "لغتان: العربية والإنجليزية", en: "languages: Arabic & English" },
  ctaTitle: { ar: "لديك مشروع يعتمد على البيانات؟", en: "Have a data-driven project in mind?" }, // DRAFT
  ctaText: {
    ar: "أخبرنا عن احتياجك وسنقترح عليك الحل المناسب.",
    en: "Tell us what you need and we'll suggest the right solution.",
  }, // DRAFT
  aboutTitle: { ar: "من نحن", en: "About us" },
  areasTitle: { ar: "مجالات عملنا", en: "What we work on" },
  testimonialsTitle: { ar: "آراء العملاء", en: "Testimonials" },
  testimonialsIntro: { ar: "ما يقوله عملاؤنا وشركاؤنا عن العمل معنا.", en: "What our clients and partners say about working with us." },
  testimonialsEmpty: {
    ar: "نعمل على جمع آراء عملائنا وشركائنا، وسننشرها هنا قريباً.",
    en: "We're collecting feedback from our clients and partners and will publish it here soon.",
  },
  blogTitle: { ar: "المدونة", en: "Blog" },
  blogIntro: { ar: "مقالات وأخبار عن الذكاء الاصطناعي والبيانات ومشاريعنا.", en: "Articles and news about AI, data and our projects." },
  blogEmpty: { ar: "لا توجد مقالات بعد. ترقّبوا أولى مقالاتنا قريباً.", en: "No articles yet. Our first posts are coming soon." },
  readMore: { ar: "اقرأ المزيد", en: "Read more" },
  contactTitle: { ar: "تواصل معنا", en: "Contact us" },
  contactIntro: {
    ar: "أخبرنا عن مشروعك أو استفسارك، وسيتواصل معك فريقنا.",
    en: "Tell us about your project or question and our team will get back to you.",
  },
  contactDetails: { ar: "بيانات التواصل", en: "Contact details" },
  contactPending: { ar: "سننشر بيانات التواصل هنا قريباً.", en: "Our contact details will be published here soon." },
  formName: { ar: "الاسم", en: "Name" },
  formEmail: { ar: "البريد الإلكتروني", en: "Email" },
  formInterest: { ar: "مجال الاهتمام", en: "Area of interest" },
  formOther: { ar: "أخرى", en: "Other" },
  formMessage: { ar: "رسالتك", en: "Your message" },
  formSend: { ar: "إرسال", en: "Send" },
  formMailNote: {
    ar: "سيفتح تطبيق البريد لديك والرسالة جاهزة للإرسال.",
    en: "Your email app will open with the message ready to send.",
  },
  formUnavailable: {
    ar: "النموذج غير متاح حالياً إلى حين نشر بيانات التواصل.",
    en: "The form isn't available until our contact details are published.",
  },
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" },
  phoneLabel: { ar: "الهاتف", en: "Phone" },
  addressLabel: { ar: "العنوان", en: "Address" },
  allRights: { ar: "جميع الحقوق محفوظة.", en: "All rights reserved." },
  notFoundTitle: { ar: "الصفحة غير موجودة", en: "Page not found" },
  notFoundText: { ar: "ربما نُقلت هذه الصفحة أو لم تعد موجودة.", en: "This page may have moved or no longer exists." },
  backHome: { ar: "العودة إلى الرئيسية", en: "Back to home" },
} satisfies Record<string, Text>;
