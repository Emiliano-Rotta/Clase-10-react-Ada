# `Desafío Hooks - ADA`

## Enunciado: lifting state up (levantamiento de estados)

### OBJETIVO
- Aprender a manejar el estado con useState

#### Consigna

1. Comenzar nuevo proyecto de React con el comando `npx create-react-app lifting-state-up`.

2. Encontraran el componente padre (app) y tres hijos ("Contador", "GastoMes", "AgregarGasto") en uno de ellos encontraran un estado
     
```
const [gastos, setGastos] = useState([1500, 300, 450])
```
3. Este estado deben poder subirlo para que pueda ser usado por los tres componentes hijos
4. A su vez, en el "contador" deberan hacer una sumatoria para que de como resultado el gasto total.
