import { Loader } from "semantic-ui-react";
import ErrorMessage from "./ErrorMessage";



const LoaderAndError = (props) => {
  const {loading, error, fullError, loaderMessage} = props
  if(loading) return <Loader inverted content={loaderMessage} size='medium' />
  if(error) return <ErrorMessage fullError error={error} />
}

export default LoaderAndError;