import {Routes, Route} from 'react-router-dom';
import { Event } from './pages/Event';
import { Subscribe } from './pages/subscribe';

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<h1>home</h1>}/>
      <Route path="/event" element={<Event/>}/>
      <Route path="/event/lesson/:slug" element={<Event/>}/>
      <Route path="/subscribe" element={<Subscribe/>}/>
    </Routes>
  )
}