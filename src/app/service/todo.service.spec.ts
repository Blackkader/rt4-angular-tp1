import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { LoggerService } from './logger.service';

describe('TodoService', () => {
  let service: TodoService;
  let logger: LoggerService;

  beforeEach(() => {
    service = TestBed.inject(TodoService);
    logger = TestBed.inject(LoggerService);
  });

  it('ajoute, récupère et supprime des todos', () => {
    service.addTodo('a', 'contenu a');
    service.addTodo('b', 'contenu b');
    expect(service.getTodos().map((t) => t.name)).toEqual(['a', 'b']);
    service.deleteTodo(service.getTodos()[0].id);
    expect(service.getTodos().map((t) => t.name)).toEqual(['b']);
  });

  it('logge les todos à chaque modification', () => {
    const spy = vi.spyOn(logger, 'log');
    service.addTodo('a', 'x');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
