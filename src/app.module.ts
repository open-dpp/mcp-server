// app.module.ts
import { Module } from '@nestjs/common';
import { McpModule } from '@rekog/mcp-nest';
import { PassportTool } from './passport.tool';
import { DppService } from './dpp.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    McpModule.forRoot({
      name: 'my-mcp-server',
      version: '1.0.0',
    }),
  ],
  providers: [PassportTool, DppService],
})
export class AppModule {}
