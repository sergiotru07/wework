// JOB_TYPES = ["Full Time", "Part Time",  "Hourly Contract", "Term Contract", "Mentoring", "Internship", "Bounty", "Open Source", "Volunteer", "Other"].sort();
JOB_TYPES = ["Termino Fijo", "Termino Indefinido", "Prestación de Servicios", "Práctica", "Voluntariado"].sort();
MAIN_CITIES = [ 'Armenia','Barranquilla','Bogota','Bucaramanga','Cali','Cartagena','Cucuta','Ibague','Manizales','Medellin','Neiva','Pereira','Santa Marta', "Villavicencio", "Pasto" ].sort();
// JOB_CATEGORIES = ["Desarrollo Web", "Desarrollo Móvil", "Marketing", "Diseño", "Administración"];
JOB_CATEGORIES = [
    { title: "Desarrollo Web", category: "Desarrollo Web", icon: "desktop" },
    { title: "Desarrollo Móvil", category: "Desarrollo Móvil", icon: "android" },
    { title: "Mercadeo y SEO", category: "Marketing", icon: "sellsy" },
    { title: "Diseño UI/UX", category: "Diseño", icon: "paint-brush" },
    { title: "Administración", category: "Administración", icon: "user-plus" }
]

SUMMERNOTE_OPTIONS = {
  type: 'summernote',
  height: 300,
  minHeight: 300,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'italic', 'underline', 'clear']],
    ['para', ['ul', 'ol']],
    ['insert', ['link','hr']],
    ['misc', ['codeview']]
  ],
  styleWithSpan: false
};

STATUSES = ["pending","active","flagged","inactive","filled"].sort();