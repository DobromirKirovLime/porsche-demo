'use client';

import { useState } from 'react';
import { Box, Button } from '@/components';
import { addProduct } from '@/actions/addProduct';
import styles from './addProduct.module.scss';

export const AddProduct = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisibility = () => {
    setModalVisible(!modalVisible);
  };

  const handleSubmit = async (e: FormData) => {
    await addProduct(e);
    setModalVisible(false);
  };

  return (
    <>
      <Button className={styles.addBtn} onClick={handleModalVisibility}>
        Add Product
      </Button>
      {modalVisible && (
        <Box className={styles.modal}>
          <Box className={styles.modalContent}>
            <Button className={styles.closeBtn} onClick={handleModalVisibility}>
              X
            </Button>
            <form action={handleSubmit} className={styles.form}>
              <label htmlFor="title">Title</label>
              <input type="text" id="title" name="title" />
              <label htmlFor="price">Price</label>
              <input type="text" id="price" name="price" />
              <label htmlFor="desc">Description</label>
              <input type="text" id="desc" name="desc" />
              <label htmlFor="category">Category</label>
              <input type="text" id="category" name="category" />
              <label htmlFor="image">Image</label>
              <input type="text" id="image" name="image" />
              <Button>Add product</Button>
            </form>
          </Box>
        </Box>
      )}
    </>
  );
};
