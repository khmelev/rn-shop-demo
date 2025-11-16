import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ProductModule,
    CategoriesModule,
  ]
})
export class AppModule {}
