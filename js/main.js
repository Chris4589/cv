const opc1 = document.querySelector("#opc1");
        const opc2 = document.querySelector("#opc2");
        const opc3 = document.querySelector("#opc3");
        const conocimientoslist = document.querySelector("#conocimientos-list");
        var data = [];

        const listarConocimientos = (con) => {

            if(data.length)
            {
                data.forEach(xx =>{
                    xx.remove();
                });
            }

            con.forEach(item =>{
                var elem = document.createElement('li');
                elem.textContent = item;
                conocimientoslist.appendChild(elem);
                
                data.push(elem);
            });
        }

        if( conocimientoslist ){
            listarConocimientos(['HTML5', 'CSS3', 'BOOTSTRAP4', 'ANGULAR']);
            if( opc1 ) {
                opc1.addEventListener('click', ()=>{
                    opc1.classList.add("active");
                    opc2.classList.remove("active");
                    opc3.classList.remove("active");

                    listarConocimientos(['HTML5', 'CSS3', 'BOOTSTRAP4', 'ANGULAR']);
                });
            }
            if( opc2 ) {
                opc2.addEventListener('click', ()=>{
                    opc2.classList.add("active");
                    opc1.classList.remove("active");
                    opc3.classList.remove("active");

                    listarConocimientos(['NODEJS', 'SPRINGBOOT']);
                });
            }
            if( opc3 ) {
                opc3.addEventListener('click', ()=>{
                    opc3.classList.add("active");
                    opc2.classList.remove("active");
                    opc1.classList.remove("active");

                    listarConocimientos(['DOCKER', 'KUBERNETES']);
                });
            }
        }
        

        ///
        const btn = document.querySelector("#btn");
        const nav = document.querySelector("#nav");
        if(btn)
        {
            btn.addEventListener('click', (event) => {
                nav.classList.toggle("active");
            }); 
        }
        ////////////////
        const chris = document.querySelector("#chris");
        const desarrollador = document.querySelector("#desarrollador");

        const EfectText = () => {
            var name = "", arrayName =  'Christopher Herrera' ;
            var counter = 0;
            if(!chris)
                return;

            const iInterval = setInterval( ( )=>{
                name += arrayName[counter];  
                chris.textContent = name;
                ++counter;

                if(counter >= 19){
                    counter = 0;
                    desarrollador.textContent = 'Desarrollador Web Jr';
                    
                    clearInterval(iInterval);

                    setTimeout(()=>{
                        desarrollador.textContent = '';
                        EfectText( );
                    }, 2000);
                }
            }, 200);
        }
        EfectText( );
        //////////////

        const sobremi = document.querySelector("#sobre-mi-href");

        if(sobremi){
            sobremi.addEventListener('click',function (event){
                event.preventDefault(); 
                location.href="#sobre-mi";
            });
        }

        const certref = document.querySelector("#cert-ref");

        if(certref){
            certref.addEventListener('click',function (event){
                event.preventDefault(); 
                location.href="#cert";
            });
        }

        const inicioref = document.querySelector("#inicio-ref");

        if(inicioref){
            inicioref.addEventListener('click',function (event){
                event.preventDefault(); 
                location.href="#inicio";
            });
        }

        const conocimientosref = document.querySelector("#conocimientosref");

        if(conocimientosref){
            conocimientosref.addEventListener('click',function (event){
                event.preventDefault(); 
                location.href="#conocimientos";
            });
        }

        const formref = document.querySelector("#formref");

        if(formref){
            formref.addEventListener('click',function (event){
                event.preventDefault(); 
                location.href="#form";
            });
        }