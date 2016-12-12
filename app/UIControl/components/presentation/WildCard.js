import React from 'react';

import CodePenHandler from './wildcardComponents/CodePenHandler';
import ImageSlider from './wildcardComponents/ImageSlider';
import GistAddition from './wildcardComponents/GistAddition';

const WildCard = (props)=>{

  const {contents, accentColor} = props;

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


return (<div className='wildCardSolo'>


          {
            contents.subHeader?
            <div className="innerContents_headerContents">
              <h3>{contents.subHeader}</h3>
            </div>: null
          }

          {
            contents.problem?<div>
            <div
              style={{backgroundColor:props.accentColor}}
              className="problemSolution">
              <ul>
                <li><h3>Problem to solve:</h3> {contents.problem}</li>
                <br/>
                <li><h3>Solution:</h3> {contents.solution}</li>
              </ul>
          </div>

          <div className="problemSolutionFooter">
            <h2>Parts of the Puzzle</h2>
          </div>
        </div>:null
      }

      {
        contents.subheader?
        <div>
          <h3>{contents.subheader}</h3>
        </div>: null
      }

      {
      contents.contents?
        <div className='paragraph'>
          <p dangerouslySetInnerHTML={{__html: wrapLinks(contents.contents, contents.linksPresent)}}></p>
        </div>: null
      }




  {
    contents.containsCodePen?<div>
      <CodePenHandler
        style={{height:400, width:"100%"}}
        iframeSrc={
          _handleStringForUrl(contents.containsCodePen, 0)
        }
        userPen='http://codepen.io/BSchauerte'
        penHref={
          _handleStringForUrl(contents.containsCodePen, 1)
        }/>

        <h4>
          {contents.mediaTitle}
        </h4>
      </div>: null
    }

    {
      contents.gistId? <div className="addSideMargin">
        <GistAddition gistId={contents.gistId}/>
        <h4>
          {contents.mediaTitle}
        </h4>
      </div>: null
    }

      {
        contents.containsMedia == 'video'?
          <div >
            <div className="paragraph">
              <h3>
                {contents.mediaTitle}
              </h3>
            </div>

            <div className="videoClass" style = {{backgroundColor:props.accentColor}}>
              <video
                className="videoClass"
                height="auto"
                width= "100%"
                type="video/mp4"
                controls>
                  <source src={contents.links} type="video/mp4"></source>
                </video>
            </div>
          </div>: null
        }

        {
          contents.containsMedia == 'images'?<div>
                <div className="paragraph">
                  <h3>{contents.mediaTitle}</h3>
                </div>
                  <ImageSlider
                    images={
                      _handleStringForUrl(contents.links)
                    }/>
                </div>:null
              }



        {
          contents.conclusion?
          <div className="LScontentss">
            <p className="paragraph">
              {contents.conclusion}
            </p>
          </div>: null
        }

      </div>
    )
  }
export default WildCard;
