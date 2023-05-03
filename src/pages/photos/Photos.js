import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPhotosDataSelector, getPhotosErrorSelector, getPhotosLodingSelector } from '../../store/redux/photos/photos.reducer';
import { getPhotos } from '../../store/service/photos/photos.service';

function Photos() {

  const dispatch = useDispatch();
  // const {data, loading, error} = useSelector(getPhotosSelector);
  const data = useSelector(getPhotosDataSelector);
  const loading = useSelector(getPhotosLodingSelector);
  const error = useSelector(getPhotosErrorSelector);

  useEffect(() => {
    dispatch(getPhotos);
  }, [dispatch]);

  const loadingUI = useMemo(() => {
    return (
      <p>Loading ...</p>
    )
  }, [])
  const errorUI = useMemo(() => {
    return (
      <p>{error}</p>
    )
  }, [error]);

  const tableUI = useMemo(() => {
    return (
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Thumbnail</th>
          </tr>
        </thead>
        <tbody>
          {
            (data && data.length > 0) && data.map((photo) => {
              return (
                <tr key={photo.id}>
                  <th>{photo.title}</th>
                  <th>
                    <a href={photo.url} target={"_blank"} rel="noreferrer">{photo.url}</a>
                    </th>
                  <th>
                  <a href={photo.thumbnailUrl} target={"_blank"} rel="noreferrer">{photo.thumbnailUrl}</a>
                  </th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }, [data]);
  
  return (
    <div>
      {
        loading ? loadingUI :
          error ? errorUI :
            data ? tableUI : null
      }
    </div>
  )
}

export default Photos;