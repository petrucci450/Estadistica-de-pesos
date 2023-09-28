let menos40Count = 0;
        let entre40y50Count = 0;
        let entre50y60Count = 0;
        let mas60Count = 0;

        function agregarAlumno() {
            const peso = parseFloat(document.getElementById("pesoAlumno").value);

            if (!isNaN(peso)) {
                if (peso < 40) {
                    menos40Count++;
                } else if (peso >= 40 && peso < 50) {
                    entre40y50Count++;
                } else if (peso >= 50 && peso < 60) {
                    entre50y60Count++;
                } else {
                    mas60Count++;
                }

                actualizarPorcentajes();
            } else {
                alert("Por favor, ingresa un valor numérico válido para el peso.");
            }
        }

        function actualizarPorcentajes() {
            const totalAlumnos = menos40Count + entre40y50Count + entre50y60Count + mas60Count;

            const menos40Porcentaje = (menos40Count / totalAlumnos * 100).toFixed(2);
            const entre40y50Porcentaje = (entre40y50Count / totalAlumnos * 100).toFixed(2);
            const entre50y60Porcentaje = (entre50y60Count / totalAlumnos * 100).toFixed(2);
            const mas60Porcentaje = (mas60Count / totalAlumnos * 100).toFixed(2);

            document.getElementById("menos40").textContent = menos40Count + " (" + menos40Porcentaje + "%)";
            document.getElementById("entre40y50").textContent = entre40y50Count + " (" + entre40y50Porcentaje + "%)";
            document.getElementById("entre50y60").textContent = entre50y60Count + " (" + entre50y60Porcentaje + "%)";
            document.getElementById("mas60").textContent = mas60Count + " (" + mas60Porcentaje + "%)";
        }