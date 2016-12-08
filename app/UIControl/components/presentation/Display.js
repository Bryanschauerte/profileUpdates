import React from 'react';

import CodePenHandler from './CodePenHandler';
import ImageSlider from './ImageSlider';

const Display = (props)=>{
  console.log(props, "props")
  const {contents} = props;
console.log(contents, "contents")
    function _handleStringForUrl(string, index='all'){

      let arr = string.split(', ');
      if(index != 'all'){
        return arr[index];
      }
      return arr;
    }

    function wrapLinks(string, linkArray){

      if( !linkArray ){
        return string;
      }

      const searchTarget = /(##)/g;
      const stringTolinkArray = _handleStringForUrl(linkArray);
      let num =0;
      let indexOfArr = 0;
      let linkedString = string.replace(searchTarget, ()=>{

        let firstOne = num%2 == 0;
        let aStartTag = `<a rel='external' target='_blank' href='${stringTolinkArray[indexOfArr]}'>`;
        let aEndTage =`</a>`;
        num+=1;
        if(firstOne){
          indexOfArr +=1;
        }
        return firstOne? aStartTag: aEndTage;

      })

      return linkedString;
    }


return (<div>


  {contents.subHeader?
    <div className="innerContents_headerContents">
      <h1>{contents.subHeader}</h1>
    </div>: null}

  {contents.problem?<div className="problemSolution">
    <ul>
      <li><h2>Problem:</h2> {contents.problem}</li>
      <br/>
      <li><h2>Solution:</h2> {contents.solution}</li>
    </ul>
  </div>:null}

  {contents.subheader?
    <div><h1>{contents.subheader}</h1></div>: null}

  {contents.contents?
  <div className='paragraph'>
    <p dangerouslySetInnerHTML={{__html: wrapLinks(contents.contents, contents.linksPresent)}}></p>
  </div>: null}




  {contents.containsCodePen?<div>
    <CodePenHandler
      style={{height:265, width:"100%"}}
      iframeSrc={
        _handleStringForUrl(contents.containsCodePen, 0)
      }
      userPen='http://codepen.io/BSchauerte'
      penHref={
        _handleStringForUrl(contents.containsCodePen, 1)
      }/>
    <h4>{contents.mediaTitle}</h4></div>: null}

    {contents.gistId? <div className="addSideMargin">
      <GistAddition gistId={contents.gistId}/>
      <h4>{contents.mediaTitle}</h4></div>: null}

      {contents.containsMedia == 'video'?
        <div className="addSideMargin">
          <div className="paragraph">
            <h1>{contents.mediaTitle}</h1>
          </div>
            <video
              src={contents.links}
              width= "100%"
              type="video/mp4"
              controls/>

        </div>: null}

        {contents.containsMedia == 'images'?<div>
          <div className="paragraph">
            <h1>{contents.mediaTitle}</h1>
          </div>
          <ImageSlider size ={{height: 'auto', width:'50%'}}
            images={
              _handleStringForUrl(contents.links)
            }/>
        </div>:null}



        {contents.conclusion?
          <div className="LScontentss">
    <p className="paragraph">{contents.conclusion}</p>
        </div>: null}

      </div>



      )
    }
export default Display;
