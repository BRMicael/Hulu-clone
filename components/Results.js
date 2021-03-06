import Thumbnail from '../components/Thumbnail'
import FlipMove from 'react-flip-move';

const Results = ({results}) => {
  return (
    <FlipMove className="px-5 my-12 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 6xl:grid-cols-5">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  )
}

export default Results