import Details from '@/assets/details.svg';

const Card = () => {
   return (
      <div className="flex flex-col bg-white shadow-[0_4px_4px_0_rgba(87,87,87,0.1)] rounded-lg px-5.5 py-4 gap-2.5">
         <div className="flex justify-between">
            <h4 className="text-green-title font-bold">Demanda #10235</h4>
            <img src={Details} alt="" />
         </div>
         <div className="flex gap-2.5">
            {[1, 2].map((item) => {
               return (
                  <span
                     key={item}
                     className="py-1 px-2 bg-green-secondary rounded-md text-sm"
                  >
                     Cerrada
                  </span>
               );
            })}
         </div>
         <div class="flex flex-col text-sm gap-2.5">
            <strong>Cliente: </strong>
            <span>IDRD</span>
            <p>
               En esta resolución se adopta el uso de guías ambientales para
               definir los criterios y requisitos técnicos para la elaboración y
               presentación de estudios de impacto ambiental. También establece
               los parámetros, modalidades, normas y límites que deben seguirse
               para realizar una evaluación ambiental completa de cualquier
               proyecto.
            </p>
         </div>
      </div>
   );
};

export { Card };
