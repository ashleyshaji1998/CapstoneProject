import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  recipeCardGrid: {
    marginBottom: 3,
    width: '48%',
    height: 'auto',
    borderWidth: 1,
    backgroundColor: '#f9e5d8',
    borderColor: '#ffeedd',
    padding: 4,
    borderRadius: 10,
    // flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 2,

  },
  recipeCardList: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 0.5,
    borderColor: '#f9e5d8',
    backgroundColor: '#ffeedd',
    padding: 8,
    borderRadius: 10,
    // flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  recipeCardContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,

  },
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 10,
    textAlign: 'center',
    // color: '#1a6cf0',

  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#fdfcfc',  
  },
  listContainer: {
    flexDirection: 'column',
    backgroundColor: '#fdfcfc',
    borderColor: '#32cd32',
    justifyContent: 'space-evenly',
    borderRadius: 10,

  },
  favbar: {
    marginTop: 12,
    paddingLeft: 10,
    paddingBottom: 10,
    alignItems: 'flex-start',
    fontSize: 24,
    fontStyle: 'normal',
    color: '#d4a373',
  },

  image: {
    width: 10,
    height: 10,
    resizeMode: 'cover',
    marginBottom: 10,
    alignItems: 'center',
  },


  btn_style: {
    // backgroundColor: '32cd32',
    borderColor: '#32cd32',
    alignItems: 'flex-end',

  },

  favoritesScrollContainer: {
    // backgroundColor: '#32cd32',
    paddingTop: 0,
    paddingLeft: 12,
    paddingRight: 8,
  },

  favoritesContainer: {
    marginTop: 8,
  },


  searchInput: {
    flex: 1,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    // backgroundColor: "#ffeedd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    margin: 10,
  },
  icon: {
    marginLeft: 10,
  },
  favoritesScrollContainer: {
    height: 800,
  },
  headview: {
    flex: 1,
  },

  notecontainer: {

    padding: 20,
    borderWidth: 1,
    borderColor: '#ffeedd',
    borderRadius: 8,

  },
  noteinput: {
    width: '100%',
    height: 20,
    borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 5,


  },

  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  head: {
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingLeft: 2,
    paddingRight: 2,
  },

  notecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },


  clearButton: {
    marginLeft: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#e1e1e1',
    marginRight: 10,
  },
  selectedTag: {
    backgroundColor: '#1a6cf0',
  },
  tagText: {
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingLabel: {
    marginRight: 10,
  },
  ratingStars: {
    flexDirection: 'row',
  },
  ratingStar: {
    marginRight: 5,
  },

  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: '#1a6cf0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeDetails: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a6cf0',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default styles