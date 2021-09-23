// SCRIPT FOR GETTING A QUOTE


const randomize = document.querySelector('.randomize');
const quote = document.querySelector('.quote');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


let quoteText = ':adverbs: :verbs: :adjectives: :nouns:!' ;

let adverbs = ["Appropriately", "Assertively", "Authoritatively", "Coherently", "Collaboratively", "Compellingly", "Competently", "Completely", "Continually", "Conveniently", "Credibly", "Distinctively", "Dynamically", "Efficiently", "Enthusiastically", "Globally", "Holistically", "Hypothetically", "Interactively", "Intrinsically", "Locally", "Meaningfully", "Monotonically", "Objectively", "Proactively", "Professionally", "Progressively", "Rapidly", "Seamlessly", "Synergistically", "Totally", "Uniquely"];
let verbs = ["actualize", "administrate", "aggregate", "architect", "benchmark", "brand", "build", "communicate", "conceptualize", "coordinate", "create", "cultivate", "customize", "deliver", "deploy", "develop", "disintermediate", "disseminate", "drive", "embrace", "e-enable", "empower", "enable", "engage", "engineer", "enhance", "envision", "evisculate", "evolve", "expedite", "exploit", "extend", "fabricate", "facilitate", "fashion", "formulate", "foster", "generate", "grow", "harness", "impact", "implement", "incentivize", "incubate", "initiate", "innovate", "integrate", "iterate", "leverage", "maintain", "matrix", "maximize", "mesh", "monetize", "morph", "myocardinate", "negotiate", "network", "optimize", "orchestrate", "parallel task", "plagiarize", "pontificate", "predominate", "procrastinate", "productize", "promote", "provide access to", "pursue", "recapitalize", "reconceptualize", "redefine", "re-engineer", "reintermediate", "reinvent", "repurpose", "restore", "revolutionize", "scale", "seize", "simplify", "strategize", "streamline", "supply", "syndicate", "synergize", "synthesize", "target", "transform", "transition", "underwhelm", "unleash", "utilize", "visualize", "whiteboard"];
let adjectives = ["24/7", "accelerated", "accurate", "adaptive", "alternative", "an expanded array of", "antifragile", "B2B", "B2C", "B2G", "B2X", "backend", "backward-compatible", "best-of-breed", "bleeding-edge", "bricks-and-clicks", "bulletproof", "business", "clicks-and-mortar", "client-based", "client-centered", "client-centric", "client-focused", "collaborative", "compelling", "competitive", "complex", "contextualized", "cooperative", "corporate", "cost effective", "covalent", "cradle-to-cradle", "cross functional", "cross-media", "cross-platform", "cross-unit", "customer directed", "customer-driven", "customized", "cutting-edge", "design-for-x", "distinctive", "distributed", "divergent", "diverse", "dynamic", "e-business", "economically sound", "edge of chaos", "effective", "efficient", "emergent", "emerging", "empowered", "enabled", "end-to-end", "enterprise", "enterprise-wide", "equity invested", "error-free", "ethical", "excellent", "exceptional", "extensible", "extensive", "flexible", "focused", "frictionless", "front-end", "fully researched", "fully tested", "functional", "functionalized", "future-proof", "global", "go forward", "goal-oriented", "granular", "high standards in", "high-payoff", "high-quality", "highly efficient", "holistic", "impactful", "inclusive", "inexpensive", "innovative", "installed base", "integrated", "interactive", "interdependent", "intermandated", "interoperable", "intuitive", "just in time", "leading-edge", "leveraged", "long-term high-impact", "low-risk high-yield", "magnetic", "maintainable", "market positioning", "market-driven", "mission-critical", "multidisciplinary", "multifunctional", "multimedia based", "next-generation", "one-to-one", "open-source", "optimal", "orthogonal", "out-of-the-box", "pandemic", "parallel", "performance based", "plug-and-play", "premier", "premium", "principle-centered", "proactive", "process-centric", "professional", "progressive", "prospective", "quality", "real-time", "reliable", "resource sucking", "resource maximizing", "resource-leveling", "revolutionary", "scalable", "seamless", "stand-alone", "standardized", "standards compliant", "state of the art", "sticky", "strategic", "streamlined", "superior", "sustainable", "synergistic", "tactical", "team building", "team driven", "technically sound", "timely", "top-line", "transparent", "turnkey", "ubiquitous", "unique", "user-centric", "user friendly", "value-added", "vertical", "viral", "virtual", "visceral", "visionary", "web-enabled", "wireless", "world-class", "worldwide"];
let nouns = ["action items", "AI", "algorithm", "alignments", "applications", "architectures", "bandwidth", "benefits", "best practices", "blamestorming", "breadboard", "catalysts for change", "channels", "collaboration and idea-sharing", "communities", "content", "convergence", "core competencies", "customer service", "data", "deliverables", "design", "e-business", "e-commerce", "e-markets", "e-tailers", "e-services", "experiences", "expertise", "functionalities", "future", "growth strategies", "human capital", "ideas", "imperatives", "infomediaries", "information", "infrastructures", "initiatives", "innovation", "intellectual capital", "interfaces", "internal or organic sources", "knowledge", "leadership", "leadership skills", "lean", "manufactured products", "markets", "materials", "meaning", "meta-services", "methodologies", "methods of empowerment", "metrics", "mindshare", "models", "networks", "niches", "niche markets", "opportunities", "outside the box thinking", "outsourcing", "paradigms", "partnerships", "pivot", "platforms", "portals", "potentialities", "process improvements", "processes", "products", "quality vectors", "relationships", "resources", "results", "ROI", "scenarios", "schemas", "services", "solutions", "sources", "strategic theme areas", "supply chains", "synergy", "systems", "technologies", "technology", "testing procedures", "total linkage", "users", "value", "vortals", "web-readiness", "web services"];


randomize.addEventListener('click', return_result);


function return_result() {

    let newQuote = quoteText;

    let adverb = randomValueFromArray(adverbs);
    let verb = randomValueFromArray(verbs);
    let adjective = randomValueFromArray(adjectives);
    let noun = randomValueFromArray(nouns);
  
    newQuote = newQuote.replace(':adverbs:',adverb);
    newQuote = newQuote.replace(':verbs:',verb);
    newQuote = newQuote.replace(':adjectives:',adjective);
    newQuote = newQuote.replace(':nouns:',noun);

    quote.textContent = newQuote;
    quote.style.visibility = 'visible';

}


// SCRIPT FOR BUTTON THAT TAKES YOU BACK TO THE TOP OF PAGE

//Get the button
var mybutton = document.getElementById("toTopButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}