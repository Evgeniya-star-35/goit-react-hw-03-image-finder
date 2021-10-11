import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../Container';
import Searchbar from '../Searchbar';
import PicturesApi from '../../Services/PicturesApi';
// import s from './App.module.css';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    showModal: false,
    loading: false,
  };

  // async componentDidMount() {
  //   try {
  //     this.setState({ loading: true });
  //     axios
  //       .get(`&q=cat&page=1&per_page=12&key=${API_KEY}`)
  //       .then(response => this.setState({ images: response.data.hits }))
  //       .finally(this.setState({ loading: false }));
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };
  render() {
    const { images, showModal, loading } = this.state;
    return (
      <Container>
        <ToastContainer autoClose={5000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        <PicturesApi searchQuery={this.state.searchQuery} />
        {loading && <h1>Load...</h1>}
        {images.length > 0 && <ImageGallery images={images} />}
        {/* { return images.length > 0 ?
        <ArticleList images={images} /> : null; */}
        {/* <button type="button" onClick={this.toggleModal}>
          Open
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}
      </Container>
    );
  }
}

export default App;
