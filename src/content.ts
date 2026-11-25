/*
 * All site copy lives here, in Arabic and English.
 *
 * Sources of the Arabic copy:
 * - The company profile (البروفايل التعريفي): about text, vision, mission, values and the
 *   five service areas.
 * - The original Arabic site (June 2025): product details and links.
 * The English is a translation. Items marked "DRAFT" were written for the site and should be reviewed.
 * Empty lists/strings (testimonials, blog posts, contact details, team) are still to be written:
 * fill them in and the pages pick them up automatically.
 */
import type { Text } from "./i18n";
import type { IconName } from "./components/Icon";

export const company = {
  name: { ar: "تناغم البيانات", en: "Data Harmony" },
  legalName: { ar: "شركة تناغم البيانات لتقنية المعلومات", en: "Data Harmony Information Technology Company" },
  // From the profile's "نبذة عن الشركة".
  tagline: {
    ar: "شركة سعودية متخصصة في الذكاء الاصطناعي والبيانات الضخمة والاستشعار عن بعد",
    en: "A Saudi company specialising in artificial intelligence, big data and remote sensing",
  },
  summary: {
    ar: "نسخّر التكنولوجيا لدعم التحول الرقمي ورؤية المملكة والمملكة الخضراء، من خلال تقديم حلول تقنية متقدمة واستشارات متخصصة.",
    en: "We harness technology to support digital transformation, Saudi Vision 2030 and a greener Kingdom, through advanced technical solutions and specialist consulting.",
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

export type Service = { id: string; icon: IconName; title: Text; points: Text[] };

// The profile's "الخدمات والحلول", in its order.
export const services: Service[] = [
  {
    id: "ai-digital-transformation",
    icon: "layers",
    title: { ar: "الذكاء الاصطناعي والتحول الرقمي", en: "AI and Digital Transformation" },
    points: [
      {
        ar: "تطوير أنظمة الذكاء الاصطناعي التوليدي لتحليل البيانات الضخمة",
        en: "Generative AI systems for analysing big data",
      },
      {
        ar: "أتمتة العمليات التجارية والصناعية لتحسين الإنتاجية",
        en: "Automating business and industrial processes to raise productivity",
      },
      { ar: "تطبيق الحلول الذكية في التخطيط الاستراتيجي", en: "Applying smart solutions to strategic planning" },
    ],
  },
  {
    id: "remote-sensing",
    icon: "map",
    title: { ar: "الاستشعار عن بعد والبيانات الجيومكانية", en: "Remote Sensing and Geospatial Data" },
    points: [
      {
        ar: "تحليل الصور الملتقطة عن طريق الأقمار الصناعية أو الطائرات دون طيار",
        en: "Analysing imagery captured by satellites and drones",
      },
      { ar: "تطوير حلول إدارة المدن الذكية والتخطيط العمراني", en: "Smart-city management and urban-planning solutions" },
      { ar: "استخدام التعلم العميق لرصد التغيرات البيئية", en: "Deep learning for monitoring environmental change" },
    ],
  },
  {
    id: "agriculture",
    icon: "sprout",
    title: { ar: "الذكاء الاصطناعي في القطاع الزراعي", en: "AI in Agriculture" },
    points: [
      {
        ar: "تحليل صحة النباتات (مثل النخيل والزيتون) باستخدام الذكاء الاصطناعي",
        en: "AI analysis of plant health, such as palms and olives",
      },
      { ar: "تطوير أنظمة متابعة المحاصيل والإنتاج الزراعي", en: "Systems for monitoring crops and agricultural production" },
      {
        ar: "تحسين إدارة المياه والموارد الزراعية لدعم الاستدامة",
        en: "Better management of water and agricultural resources for sustainability",
      },
    ],
  },
  {
    id: "healthcare",
    icon: "pulse",
    title: { ar: "الذكاء الاصطناعي في المجال الطبي", en: "AI in Healthcare" },
    points: [
      {
        ar: "تطوير أنظمة تحليل الأشعة الطبية وتقنيات التشخيص المبكر",
        en: "Medical-imaging analysis systems and early-diagnosis techniques",
      },
      {
        ar: "دعم المستشفيات بأنظمة ذكاء اصطناعي لتحليل البيانات الصحية",
        en: "AI systems that help hospitals analyse health data",
      },
      {
        ar: "توفير مساعدات رقمية للأطباء باستخدام الذكاء الاصطناعي التوليدي",
        en: "Generative-AI digital assistants for doctors",
      },
    ],
  },
  {
    id: "research",
    icon: "flask",
    title: { ar: "البحث والتطوير في الذكاء الاصطناعي", en: "AI Research and Development" },
    points: [
      {
        ar: "التعاون مع الجامعات والمراكز البحثية لتطوير تقنيات جديدة",
        en: "Working with universities and research centres to develop new technologies",
      },
      {
        ar: "تقديم استشارات متقدمة في التحول الرقمي وتحليل البيانات الضخمة",
        en: "Advanced consulting in digital transformation and big-data analysis",
      },
      {
        ar: "تطوير حلول ذكاء اصطناعي لدعم الاقتصاد الرقمي وفق رؤية 2030",
        en: "AI solutions that support the digital economy in line with Vision 2030",
      },
    ],
  },
];

export type Product = { id: string; name: Text; description: Text; points: Text[]; link?: { href: string; label: Text } };

const GITHUB: Text = { ar: "رابط المشروع على GitHub", en: "Project on GitHub" };

export const productsSection = {
  // The profile's heading for this list.
  title: { ar: "نماذج من الأعمال السابقة", en: "Examples of our work" },
  // The profile also lists "a large number of published research papers on AI applications".
  intro: {
    ar: "نماذج ذكاء اصطناعي طوّرها فريقنا، إلى جانب عدد كبير من البحوث المنشورة في تطبيقات الذكاء الاصطناعي.",
    en: "AI models our team has built, alongside a large body of published research on AI applications.",
  },
} satisfies Record<string, Text>;

// Details and links from the original Arabic site. Where the profile lists the same work, its wording is used.
export const products: Product[] = [
  {
    id: "vision-biollm",
    name: { ar: "Vision-BioLLM-KSU", en: "Vision-BioLLM-KSU" },
    description: {
      ar: "نموذج ذكاء اصطناعي توليدي مصمم خصيصًا للتفاعل مع الصور الطبية وتوليد تقارير تشخيصية.",
      en: "A generative AI model built to work with medical images and generate diagnostic reports.",
    },
    points: [{ ar: "محول رؤى + نموذج لغوي Llama3-OpenBioLLM", en: "Vision transformer + the Llama3-OpenBioLLM language model" }],
    link: { href: "https://github.com/BigData-KSU/Vision-BioLLM-KSU", label: GITHUB },
  },
  {
    id: "rs-llava",
    name: { ar: "RS-LLaVA", en: "RS-LLaVA" },
    description: {
      ar: "نموذج ذكاء اصطناعي توليدي للمحادثة مع صور الاستشعار عن بعد، يولّد أوصافًا وإجابات ذكية.",
      en: "A generative AI model for conversing with remote-sensing images, producing descriptions and intelligent answers.",
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
      ar: "نظام متكامل لإدارة مزارع النخيل في السعودية ومراقبة أشجار النخيل باستخدام الذكاء الاصطناعي.",
      en: "An integrated system for managing palm farms in Saudi Arabia and monitoring palm trees with AI.",
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

// From the company profile.
export const about = {
  intro: {
    ar: "شركة تناغم البيانات لتقنية المعلومات شركة سعودية متخصصة في الذكاء الاصطناعي والبيانات الضخمة والاستشعار عن بعد. تهدف إلى تسخير التكنولوجيا لدعم التحول الرقمي ورؤية المملكة والمملكة الخضراء، من خلال تقديم حلول تقنية متقدمة واستشارات متخصصة.",
    en: "Data Harmony Information Technology Company is a Saudi company specialising in artificial intelligence, big data and remote sensing. It harnesses technology to support digital transformation, Saudi Vision 2030 and a greener Kingdom, through advanced technical solutions and specialist consulting.",
  },
  visionTitle: { ar: "الرؤية", en: "Vision" },
  vision: {
    ar: "أن تكون شركة رائدة في تطوير حلول الذكاء الاصطناعي والبيانات الضخمة، وتقديم ابتكارات تدعم التحول الرقمي في القطاعات الحيوية.",
    en: "To be a leading company in developing AI and big-data solutions, delivering innovations that support digital transformation in vital sectors.",
  },
  missionTitle: { ar: "الرسالة", en: "Mission" },
  mission: {
    ar: "تقديم حلول تقنية ذكية ومستدامة تعتمد على الذكاء الاصطناعي لدعم المؤسسات والقطاعات المختلفة في اتخاذ قرارات مبنية على البيانات.",
    en: "To provide smart, sustainable, AI-driven solutions that help organisations across sectors make data-driven decisions.",
  },
  valuesTitle: { ar: "القيم", en: "Values" },
} satisfies Record<string, Text>;

export const values: Text[] = [
  { ar: "الابتكار والتطوير المستمر", en: "Innovation and continuous improvement" },
  { ar: "الجودة والكفاءة في تقديم الحلول", en: "Quality and efficiency in every solution" },
  { ar: "الشراكة والتعاون الاستراتيجي", en: "Partnership and strategic collaboration" },
  { ar: "الاستدامة ودعم المملكة الخضراء", en: "Sustainability and support for a greener Kingdom" },
];

export type Testimonial = { quote: Text; name: string; role: Text };
// No testimonials yet. Add real client quotes here; the page shows a "coming soon" note while this is empty.
export const testimonials: Testimonial[] = [];

export type BlogPost = { slug: string; date: string; title: Text; excerpt: Text; href?: string };
// No blog posts yet. Add posts here (newest first); the page shows a "coming soon" note while this is empty.
export const blogPosts: BlogPost[] = [];

// No contact details yet. Fill these in; empty values are hidden on the site.
export const contact = {
  email: "",
  phone: "",
  address: { ar: "", en: "" } as Text,
};

// Interface labels. Lines marked DRAFT were written for the site.
export const ui = {
  skipToContent: { ar: "انتقل إلى المحتوى", en: "Skip to content" },
  openMenu: { ar: "فتح القائمة", en: "Open menu" },
  closeMenu: { ar: "إغلاق القائمة", en: "Close menu" },
  switchLang: { ar: "English", en: "العربية" },
  switchLangLabel: { ar: "Switch to English", en: "التبديل إلى العربية" },
  homeLink: { ar: "تناغم البيانات، الصفحة الرئيسية", en: "Data Harmony home" },
  exploreServices: { ar: "استكشف خدماتنا", en: "Explore our services" },
  contactUs: { ar: "تواصل معنا", en: "Contact us" },
  learnMore: { ar: "تعرّف علينا", en: "About us" },
  // The profile's heading for the service areas.
  solutionsTitle: { ar: "الخدمات والحلول", en: "Services and solutions" },
  // The profile's mission, as an intro.
  solutionsIntro: {
    ar: "حلول تقنية ذكية ومستدامة تعتمد على الذكاء الاصطناعي، تدعم المؤسسات والقطاعات المختلفة في اتخاذ قرارات مبنية على البيانات.",
    en: "Smart, sustainable AI-driven solutions that help organisations across sectors make data-driven decisions.",
  },
  details: { ar: "التفاصيل", en: "Details" },
  statAreas: { ar: "مجالات حلول", en: "solution areas" },
  statProducts: { ar: "نماذج ذكاء اصطناعي", en: "AI models" },
  statVisionValue: { ar: "٢٠٣٠", en: "2030" },
  statVision: { ar: "دعمًا لرؤية المملكة", en: "supporting Saudi Vision" },
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
