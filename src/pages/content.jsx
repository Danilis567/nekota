import React from 'react';
import { useTranslation } from 'react-i18next';
import ContentTR from './ContentTR';
import ContentEN from './ContentEN';

const Content = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return currentLanguage === 'tr' ? <ContentTR /> : <ContentEN />;
};

export default Content;
