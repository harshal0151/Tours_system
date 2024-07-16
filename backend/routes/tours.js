

import express from 'express';
import {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount,
    getPopularTour
} from './../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new tour 
router.post('/',verifyAdmin, createTour)

//update  tour 
router.put('/:id',verifyAdmin, updateTour);

//delete tour 
router.delete('/:id',verifyAdmin, deleteTour);

//get Single tour 
router.get('/:id', getSingleTour);

//get all tours
router.get('/', getAllTour); 

//get tour by search
 router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getPopularTour', getPopularTour);
router.get('/search/getTourCount', getTourCount);

export default router; 