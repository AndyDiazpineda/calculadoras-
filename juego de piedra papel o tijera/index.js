// Función que maneja la elección del jugador
function elegirOpcion(opcionJugador) {
    // Selección aleatoria de la computadora
    const opciones = ['piedra', 'papel', 'tijera'];
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
  
    // Mostrar las elecciones del jugador y la computadora
    document.getElementById('resultado').innerHTML = `
      Jugador: ${opcionJugador} <br>
      Computadora: ${opcionComputadora} <br>
      Resultado: ${determinarGanador(opcionJugador, opcionComputadora)}
    `;
  }
  
  // Función que determina el ganador
  function determinarGanador(opcionJugador, opcionComputadora) {
    // Comparar las opciones y retornar el resultado
    if (opcionJugador === opcionComputadora) {
      return '¡Es un empate!';
    } else if (
      (opcionJugador === 'piedra' && opcionComputadora === 'tijera') ||
      (opcionJugador === 'papel' && opcionComputadora === 'piedra') ||
      (opcionJugador === 'tijera' && opcionComputadora === 'papel')
    ) {
      return '¡Ganaste!';
    } else {
      return '¡Vuelve a intentarlo!';
    }
  }
  
  // Función para reiniciar el juego
  function reiniciarJuego() {
    document.getElementById('resultado').innerHTML = '';
  }
  