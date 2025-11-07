const predictions = [
  {title:"Realtime multimodal reasoning at edge-scale", eta:"1-2 years"},
  {title:"100x parameter efficiency via modular routing", eta:"2-4 years"},
  {title:"Neural-symbolic integration for provable reasoning", eta:"2-5 years"},
  {title:"Embodied task generalization in consumer robots", eta:"3-6 years"},
  {title:"Energy-efficient on-device LLMs for mobile", eta:"1-3 years"},
  {title:"Standardized benchmarks for AI interpretability", eta:"1-2 years"},
  {title:"Large-scale human-in-the-loop alignment pipelines", eta:"2-4 years"},
  {title:"Robust short-horizon safety assessments in production", eta:"<1 year"},
];

function makeCard(p){
  const el = document.createElement('div');
  el.className = 'pred-card';
  el.innerHTML = `<h4>${p.title}</h4><p class="muted small">ETA: ${p.eta}</p>`;
  return el;
}

function populate(seedCount=6){
  const grid = document.getElementById('predictionsGrid');
  grid.innerHTML = '';
  const shuffled = predictions.slice().sort(()=>Math.random()-0.5);
  shuffled.slice(0,seedCount).forEach(p=>{
    grid.appendChild(makeCard(p));
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  populate();
  const btn = document.getElementById('generateBtn');
  btn.addEventListener('click', ()=>{
    populate(4 + Math.floor(Math.random()*4));
    const sample = document.getElementById('samplePrediction');
    sample.textContent = predictions[Math.floor(Math.random()*predictions.length)].title;
  });

  const form = document.getElementById('subscribeForm');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const msg = document.getElementById('subMessage');
    msg.textContent = `Thanks — ${email} will be notified when we launch. (Demo only)`;
    form.reset();
  });
});
