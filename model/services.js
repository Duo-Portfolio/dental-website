import services from '@/data/services.json';

export function getServices() {
    return services;
}

export function getServiceById(id) {
    return services.find(s => s.id == id);
}