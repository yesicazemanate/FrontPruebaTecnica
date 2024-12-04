
import AllRoutes from "./routes/AllRoutes.routes"
import { ProviderContext } from "./context/formAdd"
function App() {

  return (
    <ProviderContext>
    <AllRoutes/>
    </ProviderContext>
  )
}

export default App
