'use client';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Button } from "./components/ui/button"
import { Input } from './Components/ui/input';
import { Label } from './Components/ui/label';
import { Formik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { toast } from 'sonner';
import Tiptap from "./Tiptap.jsx"


const TextEditor = () => {

    const postSchema = z.object({
        title: z.string({
            required_error: 'Title is required',}),
        category: z.string({
            required_error: 'Category is required',}),
        content: z.string({
            required_error: 'Content is required',
        }).min(50).max(1000),
    });

    return (
        <section className='p-6 md:p-12 md:flex md:flex-col md:items-center md:justify-center'>
            <h1 className='text-3xl font-semibold mb-4 text-center'>Start your Journal here!</h1>
            <Formik
            initialValues={{
                title: '',
                category: '',
                content: '',
            }}
            validationSchema={toFormikValidationSchema(postSchema)}
            onSubmit={(values,{resetForm}) => {
                // toast({
                //     title: values.title,
                //     category: values.category,
                //     content: values.content,
                //   })
                toast.success('Post created successfully!');
                resetForm();
            }}
            >
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting, 
                setFieldValue
            }) => (
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 md:w-[75%]'>
            <div className='flex flex-col gap-2'>
                <Label htmlFor="title">Title</Label>
                <Input 
                    type="text" 
                    name="title"
                    onBlur={handleBlur}
                    value={values.title}
                    onChange={(e) => setFieldValue('title', e.target.value) }
                    placeholder="Title" />
                {errors.title && touched.title ? <div className='text-red-600 text-sm'>{errors.title}</div> : null}
            </div>
            <div className='flex flex-col gap-2'>
                <Label htmlFor="title">Category</Label>
                <Input 
                    type="text" 
                    name="category"
                    onBlur={handleBlur}
                    value={values.category}
                    onChange={(e) => setFieldValue('category', e.target.value) }
                    placeholder="Category" />
                {errors.category && touched.category ? <div className='text-red-600 text-sm'>{errors.category}</div> : null}
            </div>
            <section className='border-black rounded-md border-1 text-black flex flex-col gap-2'>
                <Tiptap value={values.content} setFieldValue={setFieldValue}/>
                {errors.content && touched.content ? <div className='text-red-600 text-sm'>{errors.content}</div> : null}
            </section>
            <div className="md:flex md:flex-row-reverse">
            <Button className ="w-full md:w-16" type="submit" variant="destructive">Post</Button>
            </div>
            </form>
            )}
            </Formik>
        </section>
    );
};

export default TextEditor;
