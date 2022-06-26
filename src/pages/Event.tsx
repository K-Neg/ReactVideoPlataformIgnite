import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Siderbar } from '../components/Sidebar';
import { Video } from '../components/Video';
import { useState } from "react";

export function Event(){
  let {slug} = useParams< {slug: string }>()
  
  if(!slug){
    slug = 'starter'
  } 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const mobile = (windowWidth < 400)
  console.log(mobile, windowWidth)
  return(
  
    <div className="flex flex-col min-h-screen">
      <Header/>

      { mobile ? (

        <main className="flex flex-1 flex-col">
          <Video lessonSlug={slug} mobileMode={mobile}/>
        </main>
      ):(
          <main className="flex flex-1 flex-row">
            <Video lessonSlug={slug} mobileMode={mobile}/>
            <Siderbar/>
          </main>
        )
      }
    </div>
  )
  }