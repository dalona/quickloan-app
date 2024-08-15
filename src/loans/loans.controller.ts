import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {
  @Post()
  createLoan(@Body() createLoanDto: CreateLoanDto) {
    return { message: 'Loan created', data: createLoanDto };
  }

  @Get(':id')
  getLoanStatus(@Param('id') id: string) {
    return `Status of loan ${id}`;
  }
}