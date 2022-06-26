import { Youtube, Player, DefaultUi } from '@vime/react';
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react';

import '@vime/core/themes/default.css';
import { useGetLessonBySlugQuery, useGetLessonsQuery } from '../graphql/generate';

interface VideoProps{
    lessonSlug: string;
    mobileMode: boolean;
}

export function Video(props: VideoProps){

  if (props.lessonSlug == 'starter'){
    return(
      <div className="flex-1">
      <p>Selecionar</p>
    </div>
    )
  }

  const {data} = useGetLessonBySlugQuery({
    variables:{
      slug: props.lessonSlug
    }
  })

  if (!data || !data.lesson){
    return(
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    )
  }

  return(
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1000px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi/>
          </Player>
        </div>
      </div>
        
      <div className={`p-8 mx-auto ${ !props.mobileMode ? 'max-w-[1000px]' : 'w-full'} `}>
        <div className= {`flex itens-start ${!props.mobileMode ? 'flex-row gap-20' : 'flex-col max-w-xs	gap-10'}`}>

          {/* Video data */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
          </div>

          {/* Teacher data */}
          {data.lesson.teacher && (
            <div className= {`flex items-start gap-4  ${ !props.mobileMode ? "mt-6" : "mt-2"}`}>
              <img src={data.lesson.teacher.avatarURL} alt="" className="h-16 w-16 rounded-full border-2 border-blue-500"/>
              <div>
                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
          )}                

          {/* Extra material */}                    
          <div className="flex flex-col gap-4 max-w-md">
            <a href="https://en.wikipedia.org/wiki/J._K._Rowling" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center max-w-xs hover:bg-green-700">
              <DiscordLogo size={24}/>
              Link discord
            </a>
            <a href="https://en.wikipedia.org/wiki/Diamond_firetail" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center max-w-xs	">
              <Lightning size={24}/>
              Hmmm olha que bela ave
            </a>
          </div>
        </div>
        
        {/* Download */}
        {!props.mobileMode ? (
          <div className="gap-8 mt-20 grid grid-cols-2">
            <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
              <div className="bg-green-700 h-full p-6 flex items-center">
                <FileArrowDown size={48}/>
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">Material complemetna</strong>
                <p className="text-sm text-gray-200 mt-2">
                                  Acessa aqui descorçao longa aaaaaaaa
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24}/>
              </div>
            </a>
          </div>
          ) : (<div/>)}
        

      </div>
    </div>
  )
}