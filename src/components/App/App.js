import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import Container from '../Container';
import Searchbar from '../Searchbar';
import MyLoader from '../Loader';
import Button from '../Button';
import { fetchPictures } from '../../Services/picturesApi';
import scrollPageDown from '../../helpers/Scroll';
import noHits from '../../helpers/errorFound';
// import s from './App.module.css';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    images: [],
    error: '',
    loading: false,
    showModal: false,
    url: '',
    tags: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.fetchImages()
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  componentDidCatch(error) {
    this.setState({ error });
  }
  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    return fetchPictures(searchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
        error: '',
      }));
    });
  };
  handleOnLoadClick = () => {
    this.fetchImages()
      .then(() => {
        scrollPageDown();
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleClickImages = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    const { url } = target.dataset;
    const { tag } = target.alt;
    this.setState({
      url,
      tag,
      loading: true,
    });
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  handleFormSubmit = searchQuery => {
    this.setState({
      page: 1,
      searchQuery,
      images: [],
      error: '',
    });
  };
  hideLoaderInModal = () => this.setState({ loading: false });

  render() {
    const { images, loading, showModal, url, tag } = this.state;
    return (
      <Container>
        <ToastContainer autoClose={5000} />
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <MyLoader />}
        {images.length !== 0 && (
          <ImageGallery images={images} onOpenModal={this.handleClickImages} />
        )}
        {loading && !showModal && <MyLoader />}
        {!loading && images[0] && <Button onClick={this.handleOnLoadClick} />}

        {showModal && (
          <Modal onClose={this.toggleModal} onClick={this.handleClickImages}>
            {loading && <MyLoader />}
            <img src={url} alt={tag} onLoad={this.hideLoaderInModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
