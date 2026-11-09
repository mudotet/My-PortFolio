# Project content sources

Reviewed on 9 November 2026. These notes support the portfolio copy; they are not runtime certifications of the featured projects.

## Auto Offices

- Source: [public website](https://autooffice.space/), including its workflow, team, and FAQ sections. The local source checkout's package manifest confirms Next.js, React, and Phaser.
- The public product describes 13 AI roles across 7 departments, CEO plan confirmation, draft review, Vietnamese/English interfaces, and no automatic publishing or ad spending.
- Present it as a live website, as confirmed by the owner and the accessible public site. The landing page's office animation is explicitly illustrative; no authenticated agent execution was tested in this portfolio update. Do not equate 13 roles with 13 independent models running concurrently.

## E-commerce Microservices

- Source: [repository README](https://github.com/mudotet/ecommerce-microservices#readme), fetched from the current `main` branch.
- Supports the HTTP/Kafka order flow, service-owned PostgreSQL databases, Redis caching, Redisson and row locking, duplicate processing records, retries/dead letters, Eureka, Keycloak gateway checks, and Order Service's ELK pipeline.
- This is a learning project. Database writes and Kafka publication are not atomic; the README does not claim an outbox or exactly-once delivery. Avoid production-scale or benchmark claims.

## Order Workspace

- Sources: [repository README](https://github.com/mudotet/order_services#readme) and current `main` source, especially `OrderReturnRepository`, `OrderItem`, and `OrderServiceImpl`.
- Uses Spring Data pagination, deterministic sorting, keyset CSV export in 500-row batches, DTO projections, bulk lookups, and selected `SUM`/`COUNT` queries.
- Order items reference product variants while storing unit prices and line totals. This is the concrete example behind the copy about normalized relationships and stored snapshots.
- No explicit `GROUP BY` statement was found in the inspected Java sources, so the card says SQL aggregates instead. No million-row benchmark or distributed big-data capability is claimed. Checkout transaction and remaining N+1 limitations are documented in the source project.

## Personal Blog

- Sources: local `personal_blog/personal-blog` checkout's README, package manifest, `app/admin/actions.ts`, and `lib/blog/{queries,content}.ts`.
- Supports the Next.js/TypeScript/Supabase/Three.js stack, article search and topics, owner studio, explicit publication to `published_posts`, HTML sanitization, and visual editing features described in the card.
- The owner subsequently supplied [the public blog](https://www.tusblog.site/), verified to return HTTP 200 on 9 November 2026. This replaces the protected Vercel preview as the portfolio link. No authenticated publishing flow was exercised.
