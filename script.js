const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Small live title effect
const words = ["القفاز الذكي", "Raqeem Glove", "النطق من الهاتف", "تقنية تواصل"];
let wordIndex = 0;
setInterval(() => {
  document.title = `${words[wordIndex]} | Raqeem`;
  wordIndex = (wordIndex + 1) % words.length;
}, 2500);


const translations = [
  { selector: ".brand strong", ar: "Raqeem Glove", en: "Raqeem Glove" },
  { selector: ".brand small", ar: "القفاز الذكي", en: "Smart Glove" },

  { selector: ".nav a:nth-child(1)", ar: "الملخص", en: "Summary" },
  { selector: ".nav a:nth-child(2)", ar: "التفاصيل", en: "Details" },
  { selector: ".nav a:nth-child(3)", ar: "المكونات", en: "Hardware" },
  { selector: ".nav a:nth-child(4)", ar: "الهاتف", en: "Phone" },
  { selector: ".nav a:nth-child(5)", ar: "طريقة العمل", en: "Workflow" },
  { selector: ".nav a:nth-child(6)", ar: "الفريق", en: "Team" },

  { selector: ".hero .eyebrow", ar: "مشروع عراقي بتصميم مستوحى من سومر وبابل", en: "An Iraqi project inspired by Sumer and Babylon" },
  { selector: ".hero h1", ar: "القفاز الذكي لترجمة إشارات اليد إلى كلمات ونطق من الهاتف", en: "A smart glove that sends hand gestures to the phone for words and voice" },
  { selector: ".hero-text", ar: "Raqeem Glove هو قفاز ذكي يستخدم حساسات المرونة ووحدة ESP32 لقراءة حركة الأصابع، ثم يرسل نتيجة الإشارة عبر Bluetooth إلى تطبيق الهاتف. الهاتف يعرض الكلمة العربية وينطقها صوتياً باستخدام Text To Speech، بدون DFPlayer أو ذاكرة SD.", en: "Raqeem Glove is a smart glove that uses flex sensors and an ESP32 board to read finger movements, then sends the recognized gesture through Bluetooth to the phone app. The phone displays the Arabic word and speaks it using Text To Speech, without DFPlayer or an SD card." },
  { selector: ".hero-actions .primary", ar: "استكشف المشروع", en: "Explore the Project" },
  { selector: ".hero-actions .ghost", ar: "المكونات التقنية", en: "Technical Components" },

  { selector: ".stats article:nth-child(1) span", ar: "حساسات مرونة", en: "Flex Sensors" },
  { selector: ".stats article:nth-child(2) span", ar: "المعالجة والاتصال", en: "Processing and Connection" },
  { selector: ".stats article:nth-child(3) span", ar: "النطق من الهاتف", en: "Phone Voice Output" },

  { selector: "#summary .section-title .eyebrow", ar: "ملخص المشروع", en: "Project Summary" },
  { selector: "#summary .section-title h2", ar: "فكرة القفاز باختصار", en: "The Glove Idea in Brief" },
  { selector: ".summary-grid article:nth-child(1) h3", ar: "المشكلة", en: "The Problem" },
  { selector: ".summary-grid article:nth-child(1) p", ar: "كثير من الإشارات اليدوية لا تُفهم بسهولة من الأشخاص غير المتمرسين بلغة الإشارة، لذلك يحتاج المستخدم إلى وسيط تقني يحول الحركة إلى كلمة مسموعة أو مقروءة.", en: "Many hand gestures are not easily understood by people who are not familiar with sign language, so the user needs a technical bridge that turns movement into readable or spoken words." },
  { selector: ".summary-grid article:nth-child(2) h3", ar: "الحل", en: "The Solution" },
  { selector: ".summary-grid article:nth-child(2) p", ar: "قفاز مزود بحساسات مرونة على الأصابع يقرأ درجة الانحناء، ثم يعالج ESP32 القيم ويتعرف على الإشارة، وبعدها يرسل كود الكلمة إلى الهاتف عبر Bluetooth.", en: "A glove equipped with flex sensors reads finger bending, the ESP32 processes the values and recognizes the gesture, then sends the word code to the phone through Bluetooth." },
  { selector: ".summary-grid article:nth-child(3) h3", ar: "النتيجة", en: "The Result" },
  { selector: ".summary-grid article:nth-child(3) p", ar: "عند تنفيذ حركة معيّنة تظهر الكلمة في تطبيق الهاتف وتُنطق صوتياً من الهاتف، مما يجعل التواصل أسرع وأكثر وضوحاً.", en: "When a specific gesture is performed, the word appears in the phone app and is spoken by the phone, making communication faster and clearer." },

  { selector: "#details .eyebrow", ar: "تفاصيل القفاز", en: "Glove Details" },
  { selector: "#details h2", ar: "ما الذي يفعله Raqeem Glove؟", en: "What does Raqeem Glove do?" },
  { selector: "#details > div:first-child > p:not(.eyebrow)", ar: "يعتمد القفاز على قراءة وضعية الأصابع الخمسة. كل حساس مرونة يعطي قيمة رقمية تختلف عند فرد الإصبع أو ثنيه. بعد المعايرة، يتم تحويل هذه القيم إلى نسب أو حالات مثل: مستقيم، نصف انحناء، أو منحنٍ. بعد ذلك تتم مطابقة الحركة داخل ESP32، ثم يرسل المتحكم كوداً ثابتاً إلى تطبيق الهاتف مثل HELLO أو YES أو HELP ليحوّله التطبيق إلى كلمة عربية وصوت.", en: "The glove reads the position of the five fingers. Each flex sensor gives a numeric value that changes when a finger is straight or bent. After calibration, these values become states such as straight, half-bent, or bent. The ESP32 then matches the gesture and sends a fixed code such as HELLO, YES, or HELP to the phone app, where it becomes an Arabic word and voice." },
  { selector: ".feature-list div:nth-child(1) strong", ar: "قراءة الأصابع", en: "Finger Reading" },
  { selector: ".feature-list div:nth-child(1) span", ar: "قياس انحناء الإبهام، السبابة، الوسطى، البنصر، والخنصر.", en: "Measuring the bend of the thumb, index, middle, ring, and pinky fingers." },
  { selector: ".feature-list div:nth-child(2) strong", ar: "تحليل الحركة", en: "Gesture Analysis" },
  { selector: ".feature-list div:nth-child(2) span", ar: "استخدام حدود معايرة لتحديد حالة كل إصبع.", en: "Using calibration limits to determine the state of each finger." },
  { selector: ".feature-list div:nth-child(3) strong", ar: "الإرسال للهاتف", en: "Sending to Phone" },
  { selector: ".feature-list div:nth-child(3) span", ar: "إرسال كود الإشارة عبر Bluetooth إلى تطبيق الهاتف.", en: "Sending the gesture code through Bluetooth to the phone app." },
  { selector: ".feature-list div:nth-child(4) strong", ar: "النطق من الهاتف", en: "Phone Text To Speech" },
  { selector: ".feature-list div:nth-child(4) span", ar: "التطبيق يعرض الكلمة العربية وينطقها باستخدام Text To Speech.", en: "The app displays the Arabic word and speaks it using Text To Speech." },
  { selector: "#details .tablet-info h3", ar: "أمثلة كلمات يمكن دعمها", en: "Examples of Supported Words" },

  { selector: "#hardware .section-title .eyebrow", ar: "الجانب التقني", en: "Technical Side" },
  { selector: "#hardware .section-title h2", ar: "المكونات والتوصيلات", en: "Components and Connections" },
  { selector: ".hardware-grid article:nth-child(1) h3", ar: "وحدة التحكم", en: "Control Unit" },
  { selector: ".hardware-grid article:nth-child(1) p", ar: "ESP32 لقراءة الحساسات، معالجة القيم، ثم إرسال كود الإشارة للهاتف.", en: "ESP32 reads the sensors, processes the values, then sends the gesture code to the phone." },
  { selector: ".hardware-grid article:nth-child(2) h3", ar: "حساسات المرونة", en: "Flex Sensors" },
  { selector: ".hardware-grid article:nth-child(2) p", ar: "خمسة Flex Sensors مثبتة على الأصابع الخمسة لقياس درجة الانحناء.", en: "Five flex sensors are placed on the five fingers to measure bending levels." },
  { selector: ".hardware-grid article:nth-child(3) h3", ar: "تطبيق الهاتف والصوت", en: "Phone App and Voice" },
  { selector: ".hardware-grid article:nth-child(3) p", ar: "النطق الصوتي يتم داخل الهاتف باستخدام Text To Speech بعد وصول الكود من القفاز.", en: "Voice output happens inside the phone using Text To Speech after the code arrives from the glove." },
  { selector: ".hardware-grid article:nth-child(4) h3", ar: "Bluetooth Classic", en: "Bluetooth Classic" },
  { selector: ".hardware-grid article:nth-child(4) p", ar: "الاتصال بين ESP32 والهاتف يتم عبر Bluetooth لإرسال رموز ثابتة وسهلة القراءة.", en: "The ESP32 connects to the phone through Bluetooth to send fixed, easy-to-read codes." },
  { selector: ".pin-table-wrap h3", ar: "توزيع أرجل حساسات الأصابع", en: "Finger Sensor Pin Mapping" },
  { selector: ".pin-table thead th:nth-child(1)", ar: "الإصبع", en: "Finger" },
  { selector: ".pin-table thead th:nth-child(2)", ar: "GPIO", en: "GPIO" },
  { selector: ".pin-table thead th:nth-child(3)", ar: "قيمة الاستقامة", en: "Straight Value" },
  { selector: ".pin-table thead th:nth-child(4)", ar: "قيمة الانحناء", en: "Bent Value" },
  { selector: ".pin-table tbody tr:nth-child(1) td:nth-child(1)", ar: "الإبهام", en: "Thumb" },
  { selector: ".pin-table tbody tr:nth-child(2) td:nth-child(1)", ar: "السبابة", en: "Index" },
  { selector: ".pin-table tbody tr:nth-child(3) td:nth-child(1)", ar: "الوسطى", Ram: "Middle" },
  { selector: ".pin-table tbody tr:nth-child(4) td:nth-child(1)", ar: "البنصر", en: "Ring" },
  { selector: ".pin-table tbody tr:nth-child(5) td:nth-child(1)", ar: "الخنصر", en: "Pinky" },
  { selector: ".pin-table-wrap .note", ar: "ملاحظة: هذه القيم حسب المعايرة الحالية، وقد تتغير بعد تثبيت الحساسات على القفاز النهائي.", en: "Note: These values are based on the current calibration and may change after mounting the sensors on the final glove." },

  { selector: "#workflow .section-title .eyebrow", ar: "آلية العمل", en: "Workflow" },
  { selector: "#workflow .section-title h2", ar: "من حركة الإصبع إلى صوت من الهاتف", en: "From Finger Movement to Phone Voice" },
  { selector: ".steps article:nth-child(1) h3", ar: "حركة اليد", en: "Hand Movement" },
  { selector: ".steps article:nth-child(1) p", ar: "المستخدم ينفذ إشارة معينة بأصابعه.", en: "The user performs a specific gesture with the fingers." },
  { selector: ".steps article:nth-child(2) h3", ar: "قراءة الحساسات", en: "Sensor Reading" },
  { selector: ".steps article:nth-child(2) p", ar: "كل حساس مرونة يرسل قيمة analog إلى ESP32.", en: "Each flex sensor sends an analog value to the ESP32." },
  { selector: ".steps article:nth-child(3) h3", ar: "المعالجة", en: "Processing" },
  { selector: ".steps article:nth-child(3) p", ar: "البرنامج يقارن القيم بحدود المعايرة ويتعرف على الإشارة.", en: "The program compares the values with calibration limits and recognizes the gesture." },
  { selector: ".steps article:nth-child(4) h3", ar: "الإرسال والنطق", en: "Sending and Speaking" },
  { selector: ".steps article:nth-child(4) p", ar: "الكود يُرسل للهاتف، ثم يحوّله التطبيق إلى كلمة عربية وينطقها صوتياً.", en: "The code is sent to the phone, then the app converts it into an Arabic word and speaks it aloud." },

  { selector: "#design-notes .tablet-info h3", ar: "هوية التصميم", en: "Design Identity" },
  { selector: "#design-notes .tablet-info p", ar: "يعتمد الشكل البصري على ألوان الجلد الداكن، النحاس، الذهب، الطين المحروق، والزخارف المسمارية. الهدف هو الجمع بين تقنية حديثة وروح حضارة العراق القديم، ليظهر القفاز كأداة مستقبلية تحمل هوية محلية واضحة.", en: "The visual identity uses dark leather, copper, gold, burned clay, and cuneiform-inspired ornaments. The goal is to combine modern technology with the spirit of ancient Iraq, making the glove look like a futuristic tool with a clear local identity." },
  { selector: "#design-notes .eyebrow", ar: "ملاحظات تطوير مهمة", en: "Important Development Notes" },
  { selector: "#design-notes h2", ar: "ما الذي يحتاجه النموذج ليصبح أكثر ثباتاً؟", en: "What does the prototype need to become more stable?" },
  { selector: ".clean-list li:nth-child(1)", ar: "تثبيت الحساسات جيداً على قفاز فعلي حتى لا تتغير القراءات أثناء الحركة.", en: "Mount the sensors firmly on a real glove so readings do not change during movement." },
  { selector: ".clean-list li:nth-child(2)", ar: "إعادة المعايرة بعد التركيب النهائي لأن وضع الحساس يتغير من تجربة إلى أخرى.", en: "Recalibrate after the final installation because sensor placement can change from one test to another." },
  { selector: ".clean-list li:nth-child(3)", ar: "فصل أسلاك الطاقة والإشارة وتنظيمها لتقليل التشابك والقراءات غير المستقرة.", en: "Separate and organize power and signal wires to reduce tangling and unstable readings." },
  { selector: ".clean-list li:nth-child(4)", ar: "اختبار كل إشارة عدة مرات قبل اعتمادها داخل البرنامج النهائي.", en: "Test each gesture several times before approving it in the final program." },
  { selector: ".clean-list li:nth-child(5)", ar: "اختبار اتصال Bluetooth مع تطبيق الهاتف والتأكد من أن النطق يتم من الهاتف فقط.", en: "Test the Bluetooth connection with the phone app and confirm that voice output comes only from the phone." },

  { selector: "#team .section-title .eyebrow", ar: "فريق المشروع", en: "Project Team" },
  { selector: "#team .section-title h2", ar: "الأدوار المقترحة", en: "Proposed Roles" },
  
  // تفعيل ترجمة أسماء الفريق وأدوارهم بدقة هنا:
  { selector: ".team-grid article:nth-child(1) strong", ar: "أكرم فؤاد أكرم", en: "Akram Fouad Akram" },
  { selector: ".team-grid article:nth-child(1) span", ar: "قائد الفريق ومطور الذكاء الاصطناعي", en: "Team Leader and AI Developer" },
  
  { selector: ".team-grid article:nth-child(2) strong", ar: "مصطفى أحمد إبراهيم", en: "Mustafa Ahmed Ibrahim" },
  { selector: ".team-grid article:nth-child(2) span", ar: "مطور الهاردوير", en: "Hardware Developer" },
  
  { selector: ".team-grid article:nth-child(3) strong", ar: "عباس حسين عباس", en: "Abbas Hussein Abbas" },
  { selector: ".team-grid article:nth-child(3) span", ar: "مبرمج المشروع ومطور البرمجيات", en: "Project Programmer and Software Developer" },
  
  { selector: ".team-grid article:nth-child(4) strong", ar: "زينب سعود سلمان", en: "Zainab Saud Salman" },
  { selector: ".team-grid article:nth-child(4) span", ar: "مصممة المشروع", en: "Project Designer" },

  { selector: ".site-footer strong", ar: "Raqeem Glove | القفاز الذكي", en: "Raqeem Glove | Smart Glove" },
  { selector: ".site-footer p", ar: "تقنية حديثة بهوية عراقية قديمة.", en: "Modern technology with an ancient Iraqi identity." },
  { selector: ".back-top", ar: "العودة للأعلى ↑", en: "Back to Top ↑" }
];

const wordTranslations = {
  "مرحبا": "Hello",
  "أحبك": "I love you",
  "لا": "No",
  "موافق": "OK",
  "أنت": "You",
  "سؤال": "Question",
  "هذا ممتاز": "This is excellent",
  "عمل جيد": "Good job",
  "لست متأكد": "I am not sure",
  "أراك لاحقاً": "See you later",
  "هذا رهيب": "This is awesome",
  "أتمنى لك حياة سعيدة": "I wish you a happy life"
};

function applyLanguage(lang){
  const isAr = lang === "ar";
  document.documentElement.lang = isAr ? "ar" : "en";
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  document.body.classList.toggle("english-mode", !isAr);

  translations.forEach(item => {
    const element = document.querySelector(item.selector);
    if(element){
      element.textContent = isAr ? item.ar : item.en;
    }
  });

  document.querySelectorAll(".word-cloud span").forEach(span => {
    const arText = span.dataset.ar || span.textContent.trim();
    span.dataset.ar = arText;
    span.textContent = isAr ? arText : (wordTranslations[arText] || arText);
  });

  const newHand = document.querySelector(".new-hand-image");
  if(newHand){
    newHand.alt = isAr
      ? "صورة القفاز الذكي Raqeem Glove بتصميم مستوحى من حضارة العراق القديم"
      : "Raqeem Glove smart glove image inspired by ancient Iraqi civilization";
  }

  if(langToggle){
    langToggle.textContent = isAr ? "English" : "العربية";
    langToggle.setAttribute("aria-label", isAr ? "Switch to English" : "التبديل إلى العربية");
  }

  localStorage.setItem("raqeem-site-lang", lang);
}

langToggle?.addEventListener("click", () => {
  const current = localStorage.getItem("raqeem-site-lang") || "ar";
  applyLanguage(current === "ar" ? "en" : "ar");
});

applyLanguage(localStorage.getItem("raqeem-site-lang") || "ar");



// إصلاح إضافي لضمان ترجمة قسم هوية التصميم وملاحظات التطوير
function fixDesignNotesLanguage(){
  const lang = localStorage.getItem("raqeem-site-lang") || "ar";
  const isAr = lang === "ar";

  const designTitle = document.querySelector("#design-notes .tablet-info h3");
  const designText = document.querySelector("#design-notes .tablet-info p");
  const notesEyebrow = document.querySelector("#design-notes .eyebrow");
  const notesTitle = document.querySelector("#design-notes h2");

  if(designTitle) designTitle.textContent = isAr ? "هوية التصميم" : "Design Identity";
  if(designText) designText.textContent = isAr
    ? "يعتمد الشكل البصري على ألوان الجلد الداكن، النحاس، الذهب، الطين المحروق، والزخارف المسمارية. الهدف هو الجمع بين تقنية حديثة وروح حضارة العراق القديم، ليظهر القفاز كأداة مستقبلية تحمل هوية محلية واضحة."
    : "The visual identity uses dark leather, copper, gold, burned clay, and cuneiform-inspired ornaments. The goal is to combine modern technology with the spirit of ancient Iraq, making the glove look like a futuristic tool with a clear local identity.";
  if(notesEyebrow) notesEyebrow.textContent = isAr ? "ملاحظات تطوير مهمة" : "Important Development Notes";
  if(notesTitle) notesTitle.textContent = isAr
    ? "ما الذي يحتاجه النموذج ليصبح أكثر ثباتاً؟"
    : "What does the prototype need to become more stable?";
}

const originalApplyLanguage = applyLanguage;
applyLanguage = function(lang){
  originalApplyLanguage(lang);
  fixDesignNotesLanguage();
};

fixDesignNotesLanguage();
