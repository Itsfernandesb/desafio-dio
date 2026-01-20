let nomeHeroi = "Mitsuri"
let XP = 10007
let nivel = ""

switch (true) {
  case XP <= 1000:
    nivel = "nível Ferro"
    break
  case XP >=1001 &&  XP <= 2000:
    nivel = "nível Bronze"
    break
  case XP >=2001 &&  XP <= 5000:
    nivel = "nível Prata"
    break
  case XP >=5001 &&  XP <= 7000:
    nivel = "nível Ouro"
    break
 case XP >=7001 &&  XP <= 8000:
    nivel = "nível Platina"
    break
 case XP >=8001 &&  XP <= 9000: 
    nivel = "nível Ascendente"
    break
  case XP >=9001 &&  XP <= 10000:
    nivel = "nível Imortal"
    break
  case XP >= 10001:
    nivel = "nível Radiante"
    break
}
 
console.log(" A Heroína "+nomeHeroi+" tem "+XP+" de XP e está no "+nivel+" :) ")
