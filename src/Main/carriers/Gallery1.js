import React from "react";
// import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";

const photos = [
  {
    index : 1 , src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    index : 2 , src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    index : 3 , src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    index : 4 , src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    index : 5 , src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    index : 6 , src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    index : 7 , src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    index : 8 , src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    index : 9 , src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    index : 10 , src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    index : 11 , src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    index : 12 , src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    index : 13 , src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    index : 14 , src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    index : 15 , src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    index : 16 , src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  }
];

const SortablePhoto = SortableElement(Photo);
const SortableGallery = SortableContainer(({ photos, columns, onClick }) => {
  return (
    <Gallery
      photos={photos}
      columns={columns}
      ImageComponent={props => {
        return <SortablePhoto {...props} onClick={() => onClick(props)} />;
      }}
    />
  );
});

class Gallery1 extends React.Component {
  state = {
    photos: photos
  };

  onSortEnd = ({ oldIndex, newIndex }) =>
    this.setState({
      photos: arrayMove(this.state.photos, oldIndex, newIndex)
    });

  render() {
    return (
      <SortableGallery
        axis={"xy"}
        photos={this.state.photos}
        onSortEnd={this.onSortEnd}
        columns={3}
        distance={1}
        onClick={console.info}
      />
    );
  }
}
export default Gallery1;
