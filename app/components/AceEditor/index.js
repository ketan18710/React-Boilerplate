import React,{useState} from 'react'
import AceEditor from 'react-ace';
// Import a Mode (language)
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/theme-github";
function Editor(props) {
  const [editorVal, setEditorVal] = useState('kddddddk')
  return (
    <div>
      <AceEditor
          mode="python"
          theme="github"
          value={editorVal}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={false}
          // width="100%"
          onChange={(val)=>setEditorVal(val)}
          name="UNIQUE_ID_OF_DIV"
      />
    </div>
  )
}

export default Editor
