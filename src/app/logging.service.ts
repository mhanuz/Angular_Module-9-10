// service is just a normal class
// we can acces this service(class) without creating instance, using dependency injector

export class LoggingService{
    logStatusChange(status: string){
        console.log('A server status changed, new status'+ status);
    }
}