
const messages = [
    "Más vale estar solo que mal acompaña",
    "perro ladrador poco mordedo",
    "A caballo regalado no le mires el dentad",
    "A lo hecho, pecho",
    "Al mal tiempo, buena cara",
    " Cada loco con su tema",
    "De tal palo, tal astilla",
    "El que la hace, la paga",
    "Dinero llama dinero",
    "El mundo es un pañuelo",
    "A la tercera va la vencida",
    "Cada oveja con su pareja",
    "Más vale prevenir que lamentar",
    "Más vale tarde que nunca",
    "En boca cerrada no entran moscas",
    "Al que madruga, Dios lo ayuda",
    "El que calla otorga",
    "Amor con hambre no dura",
    "Tira la piedra y esconde la mano",
    "El que ríe el último, ríe mejor",
    "El hábito no hace al monje",
    "A palabras necias, oídos sordos",
    "Crea fama y acuéstate a dormir",
    "Del dicho al hecho, hay mucho trecho",
    "Dios aprieta pero no ahorca",
    "Donde fueres, haz lo que vieres",
    "Quien mucho abarca, poco aprieta",
    "Hombre precavido vale por dos",
    "Preguntando se llega a Roma",
    "Zapatero a sus zapatos",
    "Una golondrina no hace verano",
    "Obras son amores y no buenas razones",
    " Mucho ruido y pocas nueces",
    "En la variedad está el gusto",
    " Tanto tienes, tanto vales",
    "Nadie es profeta en su tierra",
    "¿Dónde va Vicente? Donde va la gente",
    "Dios los cría y ellos se juntan",
    "El que espera desespera",
    "Escoba nueva barre bien",
    "No hay mal que dure cien años",
    "Guerra avisada no mata soldados",
    "La fe mueve montañas",
    "El que no la debe, no la teme",
    "Perro que ladra, no muerde",
    "Si te he visto, no me acuerdo",
    "No hay mal que por bien no venga",
    "Si así llueve, que no escampe",
    "Querer es poder",
    "Loro viejo no aprende a hablar",
    "Más vale maña que fuerza",
    "El papel aguanta todo",
    "Barriga llena, corazón contento",
    "Casa de herrero, cuchillo de palo",
    "Poco a poco se anda lejos",
    "Malos ojos son cariño",
    "Lo cortés no quita lo valiente",
    "A otro perro con ese hueso",
    "Contigo pan y cebolla",
    "Jaula nueva, pájaro muerto.",
    "Sarna con gusto no pica.",
    "Nunca es tarde si la dicha es buena.",
];
const randonMsg = () => {
    const message = messages[Math.floor(Math.random()*
        messages.length)];
        console.log(message);
}

module.exports = { randonMsg };
