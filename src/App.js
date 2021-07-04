import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import DetailPage from './pages/DetailPage';
import UpdatePage from './pages/UpdatePage';
import Header from './components/Header';

function App() {
  // 주소설계
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/post" exact={true} component={PostPage} />
      <Route path="/post/:id" exact={true} component={DetailPage} />
      <Route path="/post/:id/update" exact={true} component={UpdatePage} />
    </div>
  );
}

export default App;
