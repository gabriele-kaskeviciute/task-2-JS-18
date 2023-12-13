
// 2. Naudojant "https://party-wedding.glitch.me/v1/party" - pasiimkite informaciją iš šito puslapio ir naudojant skirtingus array metodus, transformuokite duomenis bei išmeskite true/false ekrane - ar "Kristupas Lapeika" yra VIP, ar ne?

fetch("https://party-wedding.glitch.me/v1/party")
  .then(res => res.json())
  .then(data => {
    const kristupasData = data.filter(person => person.name === "Kristupas Lapeika");
    const vipStatus = kristupasData[0].VIP
    if (kristupasData){
       alert("Kristupas Lapeika yra VIP")
    } else {
       alert("Kristupas Lapeika nėra VIP")
    }
  console.log(data);
  console.log("VIP = " + vipStatus);
  }) 
  .catch(e => console.log(e.message));

