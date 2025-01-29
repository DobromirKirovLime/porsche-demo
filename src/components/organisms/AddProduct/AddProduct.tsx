'use client';

import { useState } from 'react';
import { Box, Button } from '@/components';
import { addProduct } from '@/actions/addProduct';
import styles from './addProduct.module.scss';
import { useTranslations } from 'next-intl';

export const AddProduct = () => {
  const t = useTranslations('page.products.add');
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
        {t('button')}
      </Button>
      {modalVisible && (
        <Box className={styles.modal}>
          <Box className={styles.modalContent}>
            <Button className={styles.closeBtn} onClick={handleModalVisibility}>
              X
            </Button>
            <form action={handleSubmit} className={styles.form}>
              <label htmlFor="title">{t('title')}</label>
              <input type="text" id="title" name="title" />
              <label htmlFor="price">{t('price')}</label>
              <input type="text" id="price" name="price" />
              <label htmlFor="desc">{t('desc')}</label>
              <input type="text" id="desc" name="desc" />
              <label htmlFor="category">{t('category')}</label>
              <input type="text" id="category" name="category" />
              <label htmlFor="image">{t('image')}</label>
              <input type="text" id="image" name="image" />
              <Button>{t('button')}</Button>
            </form>
          </Box>
        </Box>
      )}
    </>
  );
};
