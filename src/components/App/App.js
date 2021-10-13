import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from '../Container';
import Searchbar from '../Searchbar';
import MyLoader from '../Loader';
import Button from '../Button';
import { fetchPictures } from '../../Services/picturesApi';
import scrollPageDown from '../../helpers/Scroll';
import NoFound from '../NoFound';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';

class App extends Component {
  state = {
    page: 1,
    searchQuery: '',
    images: [],
    loading: false,
    showModal: false,
    url: '',
    tag: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery) {
      this.setState({ loading: true });
      this.fetchImages()
        .catch(error => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    return fetchPictures(searchQuery, page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1,
      }));
    });
  };
  handleOnLoadClick = () => {
    this.setState({ loading: true });
    this.fetchImages()
      .then(() => {
        scrollPageDown();
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };
  handleClickImages = ({ target }) => {
    if (target.nodeName !== 'IMG') {
      return;
    }
    const { url } = target.dataset;
    const tag = target.alt;
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
      // loading: false,
    });
  };
  hideLoaderInModal = () => this.setState({ loading: false });

  render() {
    const { images, loading, showModal, url, tag, searchQuery } = this.state;
    // console.log(images[0]);
    return (
      <Container>
        <ToastContainer autoClose={3000} />
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
        {searchQuery !== '' && images.length === 0 && <NoFound />}
      </Container>
    );
  }
}

export default App;
