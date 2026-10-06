export const destinations = [
{id:1,name:"Taj Mahal",city:"Agra",state:"Uttar Pradesh",type:"Historical",description:"An iconic monument of India known for its white marble architecture and timeless symmetry.",tags:["heritage","monument","architecture"],rating:4.9,image:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Taj_Mahal_in_March_2004.jpg"},
{id:2,name:"Mysore Palace",city:"Mysuru",state:"Karnataka",type:"Cultural",description:"A grand palace celebrated for Indo-Saracenic architecture, illumination and royal heritage.",tags:["palace","heritage","culture"],rating:4.8,image:"https://upload.wikimedia.org/wikipedia/commons/5/59/Mysore_Palace_%281%29.jpg"},
{id:3,name:"Goa Beach",city:"Goa",state:"Goa",type:"Beach",description:"A relaxed coastal destination with sandy shores, sea views and a vibrant travel atmosphere.",tags:["sea","coast","relax"],rating:4.7,image:"https://upload.wikimedia.org/wikipedia/commons/6/6e/Cola_Beach_Bay_South_Goa_Jan19_DSC06186.jpg"},
{id:4,name:"Charminar",city:"Hyderabad",state:"Telangana",type:"Historical",description:"A landmark monument in the heart of Hyderabad surrounded by the city's historic culture.",tags:["monument","heritage","city"],rating:4.6,image:"https://upload.wikimedia.org/wikipedia/commons/8/8b/Charminar_Hyderabad_01.jpg"},
{id:5,name:"Kerala Backwaters",city:"Alappuzha",state:"Kerala",type:"Nature",description:"A serene network of lagoons and canals framed by lush tropical landscapes.",tags:["water","nature","relax"],rating:4.8,image:"https://upload.wikimedia.org/wikipedia/commons/9/91/Kerala_Backwaters_near_Nedumudy_-_1.jpg"},
{id:6,name:"Red Fort",city:"Delhi",state:"Delhi",type:"Historical",description:"A monumental red sandstone fort and major landmark of India's architectural history.",tags:["fort","heritage","architecture"],rating:4.6,image:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Red_Fort_in_Delhi_03-2016_img3.jpg"},
{id:7,name:"Ooty",city:"Ooty",state:"Tamil Nadu",type:"Hill Station",description:"A cool hill retreat surrounded by rolling landscapes, gardens and mountain scenery.",tags:["hills","nature","cool"],rating:4.5,image:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Fields_Hazy_Mountains_Marlimund_Ooty_Nilgiris_Aug25_A7CR_07258.jpg"},
{id:8,name:"Jaipur City Palace",city:"Jaipur",state:"Rajasthan",type:"Cultural",description:"A historic royal complex showcasing Jaipur's distinctive colors, courtyards and craftsmanship.",tags:["palace","royal","culture"],rating:4.7,image:"https://upload.wikimedia.org/wikipedia/commons/4/48/City_Palace_Jaipur.jpg"},
{id:9,name:"Manali",city:"Manali",state:"Himachal Pradesh",type:"Adventure",description:"A mountain destination suited to scenic escapes, outdoor activities and Himalayan views.",tags:["mountains","adventure","snow"],rating:4.7,image:"https://upload.wikimedia.org/wikipedia/commons/c/cb/Manali%2C_Himachal_Pradesh.jpg"},
{id:10,name:"Rishikesh",city:"Rishikesh",state:"Uttarakhand",type:"Adventure",description:"A riverside destination known for adventure activities, spirituality and mountain scenery.",tags:["river","adventure","culture"],rating:4.6,image:"https://upload.wikimedia.org/wikipedia/commons/6/63/Rishikesh_India.jpg"},
{id:11,name:"Hampi",city:"Hampi",state:"Karnataka",type:"Historical",description:"An atmospheric archaeological landscape filled with ancient ruins and dramatic boulder hills.",tags:["ruins","heritage","history"],rating:4.8,image:"https://upload.wikimedia.org/wikipedia/commons/0/03/Virupaksha_Temple_Hampi.jpg"},
{id:12,name:"Darjeeling",city:"Darjeeling",state:"West Bengal",type:"Hill Station",description:"A Himalayan hill town known for tea gardens, mountain views and cool weather.",tags:["tea","hills","nature"],rating:4.7,image:"https://upload.wikimedia.org/wikipedia/commons/4/4a/Darjeeling%2C_India%2C_Tea_plantations_on_hills.jpg"},
{id:13,name:"Varanasi Ghats",city:"Varanasi",state:"Uttar Pradesh",type:"Cultural",description:"Historic riverside ghats with a distinctive cultural and spiritual atmosphere.",tags:["river","culture","heritage"],rating:4.8,image:"https://upload.wikimedia.org/wikipedia/commons/8/8d/Ghats_in_Varanasi%2C_Uttar_Pradesh%2C_India_%282000%29_2.jpg"},
{id:14,name:"Andaman Islands",city:"Port Blair",state:"Andaman and Nicobar Islands",type:"Beach",description:"Island scenery combining beaches, clear waters and tropical landscapes.",tags:["island","sea","nature"],rating:4.9,image:"https://upload.wikimedia.org/wikipedia/commons/1/19/Havelock_Island%2C_Sandy_lagoon%2C_Andaman_Islands.jpg"},
{id:15,name:"Udaipur City Palace",city:"Udaipur",state:"Rajasthan",type:"Cultural",description:"A lakeside royal complex offering courtyards, ornate architecture and heritage views.",tags:["palace","lake","royal"],rating:4.8,image:"https://upload.wikimedia.org/wikipedia/commons/d/d3/City_Palace_Udaipur.jpg"}
];

export function kmp(text, pattern){
  text=text.toLowerCase(); pattern=pattern.toLowerCase();
  if(!pattern) return true;
  const lps=Array(pattern.length).fill(0); for(let i=1,len=0;i<pattern.length;){if(pattern[i]===pattern[len])lps[i++]=++len;else if(len)len=lps[len-1];else lps[i++]=0;}
  let i=0,j=0; while(i<text.length){if(text[i]===pattern[j]){i++;j++;if(j===pattern.length)return true;}else if(j)j=lps[j-1];else i++;} return false;
}
export function rabinKarp(text, pattern){
  text=text.toLowerCase(); pattern=pattern.toLowerCase(); if(!pattern)return true; if(pattern.length>text.length)return false;
  const base=256, mod=1000003; let ph=0,th=0,h=1;
  for(let i=0;i<pattern.length-1;i++)h=h*base%mod;
  for(let i=0;i<pattern.length;i++){ph=(base*ph+pattern.charCodeAt(i))%mod;th=(base*th+text.charCodeAt(i))%mod;}
  for(let i=0;i<=text.length-pattern.length;i++){if(ph===th&&text.slice(i,i+pattern.length)===pattern)return true;if(i<text.length-pattern.length)th=(base*(th-text.charCodeAt(i)*h)+text.charCodeAt(i+pattern.length))%mod,th=(th+mod)%mod;} return false;
}
export function editDistance(a,b){a=a.toLowerCase();b=b.toLowerCase();const d=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length];}
export function searchDestinations(query,mode="combined"){
  const q=query.trim().toLowerCase(); if(!q)return [];
  return destinations.map(d=>{
    const hay=[d.name,d.city,d.state,d.type,...d.tags,d.description].join(" ").toLowerCase();
    let match=false,method=mode,relevance=0;
    if(mode==="exact"){match=d.name.toLowerCase()===q;relevance=match?100:0;}
    else if(mode==="kmp"){match=kmp(hay,q);relevance=match?90:0;}
    else if(mode==="rabin-karp"){match=rabinKarp(hay,q);relevance=match?88:0;}
    else if(mode==="fuzzy"){const dist=editDistance(q,d.name);match=dist<=Math.max(2,Math.floor(d.name.length*.35));relevance=Math.max(0,100-dist*12);method="Edit Distance";}
    else if(mode==="category"){match=d.type.toLowerCase()===q||d.tags.some(t=>t.toLowerCase()===q);relevance=match?92:0;}
    else {const exact=d.name.toLowerCase()===q, word=kmp(hay,q), dist=editDistance(q,d.name);match=exact||word||dist<=Math.max(2,Math.floor(d.name.length*.28));relevance=exact?100:word?86:Math.max(0,75-dist*10);method=exact?"Exact Match":word?"KMP / Smart Match":"Fuzzy / Edit Distance";}
    return match?{...d,method,relevance}:null;
  }).filter(Boolean).sort((a,b)=>b.relevance-a.relevance||b.rating-a.rating);
}
export function rankDestinations(){return [...destinations].sort((a,b)=>b.rating-a.rating);}
const edges=[
["Taj Mahal","Red Fort",3],["Red Fort","Jaipur City Palace",4],["Jaipur City Palace","Udaipur City Palace",5],["Udaipur City Palace","Goa Beach",8],
["Mysore Palace","Goa Beach",6],["Mysore Palace","Hampi",3],["Hampi","Goa Beach",5],["Charminar","Hampi",4],["Charminar","Hyderabad",1],
["Kerala Backwaters","Goa Beach",7],["Ooty","Mysore Palace",3],["Ooty","Manali",9],["Manali","Rishikesh",4],["Rishikesh","Delhi",6],["Delhi","Red Fort",2],
["Darjeeling","Rishikesh",8],["Varanasi Ghats","Rishikesh",7],["Andaman Islands","Goa Beach",10],["Varanasi Ghats","Taj Mahal",5],["Hampi","Udaipur City Palace",6]
];
export function dijkstra(start,end){
 const names=destinations.map(d=>d.name), adj=Object.fromEntries(names.map(n=>[n,[]]));
 edges.forEach(([a,b,w])=>{if(adj[a]&&adj[b]){adj[a].push([b,w]);adj[b].push([a,w]);}});
 const dist=Object.fromEntries(names.map(n=>[n,Infinity])),prev={}; const used=new Set(); dist[start]=0;
 while(used.size<names.length){let u=null;for(const n of names)if(!used.has(n)&&(u===null||dist[n]<dist[u]))u=n;if(u===null||dist[u]===Infinity)break;used.add(u);for(const [v,w] of adj[u])if(dist[u]+w<dist[v]){dist[v]=dist[u]+w;prev[v]=u;}}
 if(dist[end]===Infinity)return null; const path=[];for(let at=end;at;at=prev[at])path.unshift(at);return {path,distance:dist[end]};
}
export function assistant(q){
 const s=q.toLowerCase(); let results=[];
 if(s.includes("histor"))results=destinations.filter(d=>d.type==="Historical"||d.tags.includes("heritage"));
 else if(s.includes("beach")||s.includes("sea"))results=destinations.filter(d=>d.type==="Beach");
 else if(s.includes("hill")||s.includes("mountain"))results=destinations.filter(d=>d.type==="Hill Station"||d.tags.includes("mountains"));
 else results=searchDestinations(q,"combined").slice(0,4);
 if(results.length)return `I found ${results.length} destination${results.length>1?"s":""}: ${results.map(d=>d.name).join(", ")}. You can open any destination for details or use Route Planner to build a Dijkstra route.`;
 return "I couldn't find a close match in the TripSphere dataset. Try a destination name, category, or a question like 'find historical places'.";
}
