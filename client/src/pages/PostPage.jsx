import { Button, Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PostPage() {

  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getPost?slug=${postSlug}`);
        const data = await res.json();
        if(!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
        

      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchPost();
  }, [postSlug]);

  if (loading) return<div classname="flex justify-center items-center min-h-screen">
    <Spinner size='xl' />
    Loading...
    </div>

  
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3 mt-10 p-3 font-serif max-w-21 text-center max-auto lg:text-4xl'>{post && post.title}</h1>
      <Link to={`/search?category=${post && post.category}`} className='self-center'>
      <Button color='gray' pill-size='xs' >{post && post.category}</Button>
      </Link>
      <img src={post && post.image} alt={post && post.title} className='mt-10 p-3 max-h-[600px] w-full object-cover' />
      <div className='flex justify-between p-3 border-slate-500 border-b mx-auto w-full text-sm'>
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className='italic'>{post && (post.content.length /1000).toFixed(0)} mins read</span>
      </div>
      <div className='post-content' dangerouslySetInnerHTML={{__html: post && post.content}}>
      </div>
      </main>
)}
