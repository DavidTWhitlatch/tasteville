import './App.css';
import Layout from './layouts/Layout';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Layout>
        <Switch>
          <Route path='/login'>
            <h3>Login</h3>
          </Route>
        </Switch>
      </Layout>
		</div>
	);
}

export default App;
