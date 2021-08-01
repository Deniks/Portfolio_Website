export function PrepareDescription(text) {
  const limit = 500;
  return text.length <= limit ? text : text.substring(0, limit) + '...';
}

/**
 * 
 * 
 * const {useState} = React;

const LongText = ({ content,limit}) => {
  const [showAll, setShowAll] = useState(false);

  const showMore = () => setShowAll(true);
  const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return <div> 
      {content} 
      <button onClick={showLess}>Read less</button> 
    </div>
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return <div> 
    {toShow} 
    <button onClick={showMore}>Read more</button>
  </div>
}


const App = () => <div>
  <LongText content = "Short text" limit = {10}/> 
  <LongText content = "Very long text, very very long" limit = {10} /> 
</div>
 */
