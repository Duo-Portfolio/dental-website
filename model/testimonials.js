import testimonials from '@/data/testimonials.json';


export function getTestimonials() {
    return testimonials;
}

export function getServiceById(id) {
    return testimonials.find(t => t.id == id);
}