// import { FilterProduct } from './product.filter';
// import { TestBed, async } from '@angular/core/testing';
// import { User } from '../entities/user';



// // 3.0: Search for destination but the data does not contain destination
// // 3.1: Search for a negative number of seats


// describe('Product Filter', () => {
  

//   beforeEach(() => {
//    TestBed.configureTestingModule({
//      declarations: [
//        FilterProduct
//      ],
//     });
//   });

//   it('0.1: Return empty array if array of lifts is empty while searching on specific value. ', () => {
//     // Arrange
//     const filter = new FilterProduct();
//     // const data = [{_id: '123', Name: 'Banana'}, {}]  ;
//     const data = [];
//     const search = 'Banana';
//     const expectedResult = [];

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });


//   it(' 1.1: Find lifts by searching origin', () => {
//     // Arrange
//     const filter = new FilterProduct();

//     const data = [{_id: '4', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = 'Copenhagen';
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });

//   it('1.0: Find lifts by searching destination', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     //const data = [{_id: '123', destination: 'Copenhagen', origin: 'cph', availableSeats: 3, }];
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = 'Albertslund';
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });


//   it('1.2: Find lifts by searching availableSeats', () => {
    
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = '4';
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });

//   it('2.0: Dont find lifts when searching for something not in the array', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = '100';
//     const expectedResult = [];

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });


//   it('2.1: Return all lifts when search is undefined', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = undefined;
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });

//   it('2.1: Return all lifts when search is empty string', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: 'Copenhagen', 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = '';
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });


//   it('3.0: Search for destination but the data does not contain destination', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: undefined, 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = 'Copenhagen';
//     const expectedResult = [];

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });

//   it('3.1: Search for a negative number of seats', () => {
//     // Arrange
//     const filter = new FilterLift();
    
//     const data = [{_id: '3fdska', 
//     origin: 'Albertslund', 
//     destination: undefined, 
//     availableSeats: 4, 
//     departureTime: new Date(2019, 0, 1, 8, 0,0 ), 
//     owner: {_id: '21', firstName: 'Eric', lastName: 'Sørensen', email: 'eric@sørensen.dk'} as User }];

//     const search = '-2';
//     const expectedResult = data;

//     // Act
//     const result = filter.transform(data, search);

//     // Assert (expect)
//     expect(result).toEqual(expectedResult);
//   });


//  });