import {Spinner} from 'react-bootstrap';

function InlineLoader() {
  return (
    <Spinner animation="border" role="status" variant="secondary">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default InlineLoader;