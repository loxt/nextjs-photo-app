import { useRouter } from 'next/router';
import { formatDistance } from 'date-fns';
import br from 'date-fns/locale/pt-BR';
import React, { useState } from 'react';

export default function UserPage(props) {
  const router = useRouter();
  const id = router.query.id;
  const [bookmarked, setBookmarked] = useState(false);
  const userPhotos = props.data.filter((i) => String(i.userId) === String(id));

  if (props.data && props.data.length && !userPhotos) {
    return router.push('/');
  }

  if (userPhotos.length) {
    return (
      <>
        <div className='row text-white'>
          <div className='col-2'>
            <img
              src={userPhotos[0].authorLogo}
              alt=''
              className='img-fluid rounded-circle border-primary'
            />
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <p className='m-0'>{userPhotos.length}</p>
            <p className='text-white-50'>Posts</p>
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <p className='m-0'>
              {formatDistance(new Date(userPhotos[0].createdAt), Date.now(), {
                locale: br,
              })}
            </p>
            <p className='text-white-50'>Active</p>
          </div>
          <div className='col-3 text-center d-flex flex-column align-items-center'>
            <button
              type='button'
              className={`btn btn-dark p-0 text-left ${
                bookmarked ? 'clicked' : ''
              }`}
              onClick={() => setBookmarked(true)}>
              Follow
            </button>
          </div>
        </div>
        <div className='text-white pt-4'>
          <h3>{userPhotos[0].author}</h3>
        </div>
        <div className='p-5 py-1'>
          <hr className='text-white' />
        </div>
        <div className='row row-cols-2'>
          {userPhotos.map((photo) => (
            <img src={photo.photo} className='p-1' alt='Photo' />
          ))}
        </div>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
}
