 
 
import { Provider } from 'react-redux';
import Body from './componets/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div className=" text-xl  italic text-red-800">
    <Provider store={appStore}>
    <Body/>
     </Provider> 
    </div>
  );
}

export default App;
